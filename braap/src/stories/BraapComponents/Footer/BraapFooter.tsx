import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import {SocialIcon, SocialIconProps} from "../SocialIcon";
import { Social_Media} from "../logoResources";

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
                   
                    <Grid item xs={3}>
                        {Social_Media.map((icon: SocialIconProps) =>{
                            return(
                                <SocialIcon key={icon.name} {...icon} />
                            )
                        })}
                    </Grid>
                </Grid>
            </footer>

        );
    };

    /* <Grid item xs={6}>
                        <SocialIcon {...MogaliBear_Media[0]} />
                        {'All Rights belong to Marvel Studios...'}
                    </Grid>*/
