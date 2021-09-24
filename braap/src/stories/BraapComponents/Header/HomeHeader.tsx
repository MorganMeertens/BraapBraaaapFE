import React, { useEffect, useState } from "react";
import { Dehaze } from "@material-ui/icons";
import {
    makeStyles,
    AppBar,
    Avatar,
    Drawer,
    Hidden,
    IconButton,
    Toolbar,
} from "@material-ui/core";
import { Sidebar } from "../basicSidebar/Sidebar";
import Grid from '@material-ui/core/Grid';
import { useHistory, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../api/mutations";
import Button from "@material-ui/core/Button";
import { Self_self } from "../../../api/__generated__/Self";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export interface HeaderProps {
    user?: Self_self;
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "black",
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(6),
        color: '#FFFFFF'

    },
    logo: {
        flexgrow: 1,
        height: "40px",
    },
    title: {
        flexgrow: 1,
        height: "70px",
        align: 'center',

    },
    appBar: {
        backgroundColor: "black",
        minHeight: "65px",
    },
    userInformation: {
        display: "flex",
        marginLeft: "20px",
    },
}));

export interface Login_login_student {
    __typename: "Student";
    id: string;
    name: string;
    gitHub: string;
    imageURI: string;
}

export interface Login_login {
    __typename: "LoginPayload";
    student: Login_login_student;
    jwt: string;
}

export interface Login {
    login: Login_login;
}

export interface LoginVariables {
    code: string;
}

const CLIENT_ID = "5c68337412d7eaea93c7";
const REDIRECT_URI = "https://braapbraapfe-oauth.azurewebsites.net/home";



export const HomeHeader: React.FC<HeaderProps> = ({ user }) => {
    const [sideBar, setSideBar] = useState(false);
    const classes = useStyles();

    const history = useHistory()

    const query = useQuery();

    const toggleSideBar = () => {
        setSideBar(!sideBar);
    };
    const [login] = useMutation<Login>(LOGIN);

    useEffect(() => {
        const loginMethod = async () => {
            const code = query.get("code");
            if (code != null) {
                try {
                    const { data } = await login({ variables: { code } });
                    if (data != null) {
                        localStorage.setItem("token", data.login.jwt)
                    }
                } catch (e) {
                    console.log(e);
                }
                history.push('/home');
            }
        };
        loginMethod();
    }, []);

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Grid justify={"space-between"} container>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleSideBar}
                        >
                            <Dehaze />
                            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
                                <Sidebar user={user} />
                            </Drawer>
                        </IconButton>
                        <Grid item xs={1} />
                        <Grid xs={4} item>

                        </Grid>
                        <Grid item xs={1} />
                        <Grid xs={1} item>
                            <Grid container justify={"center"}>
                                {user == null ? (
                                    <Button
                                        color="inherit"
                                        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
                                    >
                                        Login
                                    </Button>
                                ) : (
                                    <div className={classes.userInformation}>
                                        <Hidden smDown>
                                            <Avatar alt="user-avatar" src={user.imageURI} />
                                            <Button >{user.userName}</Button>
                                        </Hidden>
                                    </div>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );



};
