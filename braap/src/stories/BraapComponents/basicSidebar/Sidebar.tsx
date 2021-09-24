import React from "react";
import { Link, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import TwoWheelerIcon from '@material-ui/icons/TwoWheeler';

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

export default function Sidebar(){
    const classes = useStyles();
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
        </div>
    );
};  