import React from "react";
import { Link, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import TwoWheelerIcon from '@material-ui/icons/TwoWheeler';
import { Dehaze } from "@material-ui/icons";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddBoxIcon from '@material-ui/icons/AddBox';
import  {HeaderProps}  from "../Header/HomeHeader";

const useStyles = makeStyles({
    list: {
        width: 250,
        backgroundcolor: "#f0141e"
    },
    listText:{
        color: "black",
    },
    listButton: {
        color: "black",
    },
    fullList: {
        width: "auto",
    },
});


const CLIENT_ID = "5c68337412d7eaea93c7";
const REDIRECT_URI = "https://braapbraapfe-oauth.azurewebsites.net/home";

export const Sidebar: React.FC<HeaderProps> = ({ user }) => {
    const classes = useStyles();
    const handleLogout = () => {
        localStorage.removeItem("token");
      }
    return(
        <div className={classes.list}>
            <List>
                <ListItem button href="/home" component={Link}>
                    <ListItemIcon className={classes.listButton}>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText className={classes.listText} primary="HOME" />
                </ListItem>
                
                <ListItem button href="/AllMotorbikes" component={Link}>
                    <ListItemIcon className={classes.listButton}>
                        <BubbleChartIcon  />
                    </ListItemIcon>
                    <ListItemText className={classes.listText} primary="ALL MOTORBIKES" />
                </ListItem>
                
                <ListItem button href="/Motorbikes-Kawasaki" component={Link}>
                    <ListItemIcon className={classes.listButton}>
                        <TwoWheelerIcon  />
                    </ListItemIcon>
                    <ListItemText className={classes.listText} primary="KAWASAKI" />
                </ListItem>

                <ListItem button href="/Motorbikes-Yamaha" component={Link}>
                    <ListItemIcon className={classes.listButton}>
                        <TwoWheelerIcon  />
                    </ListItemIcon>
                    <ListItemText className={classes.listText} primary="YAMAHA" />
                </ListItem>

                <ListItem button href="/Motorbikes-Honda" component={Link}>
                    <ListItemIcon className={classes.listButton}>
                        <TwoWheelerIcon  />
                    </ListItemIcon>
                    <ListItemText className={classes.listText} primary="HONDA"/>
                </ListItem>

                <ListItem button href="/Motorbikes-Suzuki" component={Link}>
                    <ListItemIcon className={classes.listButton}>
                    <TwoWheelerIcon  />
                    </ListItemIcon>
                    <ListItemText className={classes.listText} primary="SUZUKI" />
                </ListItem>
            </List>
            <List>
        {user ?
          <ListItem button href="/home" component={Link} onClick={handleLogout}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Logout" />
          </ListItem> :
          <ListItem button href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`} component={Link}>
            <ListItemIcon><AddBoxIcon /></ListItemIcon>
            <ListItemText className={classes.listText} primary="Login" />
          </ListItem>

        }
      </List>
        </div>
    );
};  