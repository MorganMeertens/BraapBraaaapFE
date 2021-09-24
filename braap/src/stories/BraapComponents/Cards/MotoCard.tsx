import React from 'react';
import { CardMedia, Card, CardContent, CardHeader } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import makeMotoCardStyles from './MotoCardStyles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';

export interface MotoCardProps {
    bikeImage: string;
    bikeYear: string;
    bikeMake: string;
    bikeModel: string;
    bikeSpecs: JSX.Element;

};




const MotoCard = ({ bikeImage, bikeYear, bikeMake, bikeModel, bikeSpecs }: MotoCardProps): JSX.Element => {
    const styles = makeMotoCardStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return <div>
        <Card className={styles.card} variant={"outlined"}>
            <CardMedia
                component="img"
                height="170"
                image={bikeImage}
            />
            <CardHeader className={styles.header}
                title={bikeYear + " " + bikeMake + " " + bikeModel} >

            </CardHeader>
            <CardActions disableSpacing>

                <IconButton
                    className={clsx(styles.expand, {
                        [styles.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {bikeSpecs}
                </CardContent>
            </Collapse>
        </Card>
    </div>
};



export default MotoCard;