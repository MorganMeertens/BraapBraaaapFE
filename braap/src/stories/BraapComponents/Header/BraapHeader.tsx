import React, { useState } from "react";
import { Dehaze} from "@material-ui/icons";
import { AppBar, IconButton, Toolbar, makeStyles, Drawer} from "@material-ui/core";
import Sidebar from "../basicSidebar/Sidebar";
import mogaliBearIconWhite from "../assets/MogalibearAssets/WheelieIcon-Smoke.png"
import braapbraaaapheader from "../assets/MogalibearAssets/BraapBraaaap-white.png"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme)=>({
        root:{
            backgroundColor: "black",
            flexGrow: 1,
            height: "70px",
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
    }));



export default function BraapHeader(){
    const [sideBar, setSideBar] = useState(false);
    const classes = useStyles();

    const toggleSideBar = () => {
        setSideBar(!sideBar);
    };

    return(
        <div>
            
            <AppBar position="static" className={classes.root} >
                <Toolbar >
                    <Grid justify={"space-between"} container>
                        <IconButton className={classes.menuButton} edge="end" aria-label="menu" onClick={toggleSideBar}>
                            <Dehaze />
                            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
                                <Sidebar />
                            </Drawer>
                        </IconButton>
                        <Grid item xs={1} />
                        <Grid xs={4} item>
                            <Grid container justify={"center"}>
                                <img src={braapbraaaapheader} id={braapbraaaapheader}  alt="Web Title" className={classes.title}/>
                                    
                            </Grid>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid xs={1} item>
                            <Grid container justify={"center"}>
                                <IconButton edge="start" href="/home">
                                    <img src={mogaliBearIconWhite} id={mogaliBearIconWhite}  alt="MogaliBear Logo" className={classes.logo}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
                  
            </AppBar>
        </div>
    );
};


/* <IconButton className={classes.menuButton} edge="end" aria-label="menu" onClick={toggleSideBar}>
                        <Dehaze />
                        <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
                            <Sidebar />
                        </Drawer>
                    </IconButton>
                    <IconButton edge="start" href="/home">
                        <img src={mogaliBearIconWhite} id={mogaliBearIconWhite}  alt="MogaliBear Logo" className={classes.logo}/>
                    </IconButton>
                    <div>
                        <img src={braapbraaaapheader} id={braapbraaaapheader}  alt="Web Title" className={classes.title}/>
                    </div>
*/