import React from "react";
import { createStyles, Grid, makeStyles, Theme, IconButton } from "@material-ui/core";
import {SocialIcon, SocialIconProps} from "../SocialIcon";
import { Social_Media} from "../logoResources";
import mogaliBearIconWhite from "../assets/MogalibearAssets/mogalibearIconwhite.png"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "fixed",
            bottom: 0,
            width: "100%",
            height: 50,
            textAlign: "center",
            fontSize: "12px",
            background: 'black',
            color: "white",
            margin: 0,
        },
        title:{
            flexgrow: 1,
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            fontSize: 12,
            bottom: 0
        },
        logo: {
            flexgrow: 1,
            height: "30px",
        },
    }));

    


    export default function BraapFooter(){
        const classes = useStyles ();

        return(
            <footer className={classes.root}>
                <Grid 
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}>
                    <Grid item xs={2}>
                        {Social_Media.map((icon: SocialIconProps) =>{
                            return(
                                <SocialIcon key={icon.name} {...icon}  />
                            )
                        })}
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
            </footer>

        );
    };

    /* <Grid item xs={6}>
                        <SocialIcon {...MogaliBear_Media[0]} />
                        {'All Rights belong to Marvel Studios...'}
                    </Grid>*/
