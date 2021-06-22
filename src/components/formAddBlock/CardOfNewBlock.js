import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    cardCard: {
        boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.25)",
    },
    cardImage: {
        margin: "10px auto",
        minHeight: "146px",
        maxHeight: "146px",
        objectFit: "none"
    },
    cardTitle: {

    },
    cardButton: {
        letterSpacing: "1.25px",
        textTransform: "uppercase",
        paddingLeft: "0"
    },
}));

const CardOfNewBlock = props => {
    const classes = useStyles();
        
    return (
        <div className={classes.cardCard}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.title}
                    className={classes.cardImage}
                    image={props.src}
                />     
            </CardActionArea>

            <div style={{textAlign: "left", padding: "0 10px"}}>
                <Typography className={classes.cardTitle} variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Button className={classes.cardButton} size="small" color="primary">
                    Выбрать
                </Button>
            </div>
        </div>
    )
}

export default CardOfNewBlock;
