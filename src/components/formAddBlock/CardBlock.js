import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Button, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    block: {
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);",
        padding: "12px 21px",
        paddingRight: "0",
        marginBottom: "15px"
    },
    block__image: {
        height: "80px",
        width: "88px",
        borderRadius: "4px"
    },
    block__header: {
        marginTop: "-8px",
        marginBottom: "0"
    },
    block__content: {
        marginRight: "10px",
        marginLeft: "30px",
        width: "100%"
    },
    block__badges: {
        marginTop: "2.5px",
        display: "flex",
        gap: "15px",
        position: "relative"
    },
    block__add_button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    block__button: {
        letterSpacing: "1.25px",
        textTransform: "uppercase"
    },
    block__button_right: {
        letterSpacing: "1.25px",
        textTransform: "uppercase",
        position: "absolute",
        right: "10px",
        bottom: "-10px"
    }
}));

const CardBlock = props => {
    const classes = useStyles();

    return (
        <div className={classes.block}>
            

            <Hidden smDown>
                <img className={classes.block__image} src="http://c.files.bbci.co.uk/116AB/production/_115093317_neo4.jpg"  alt="addblock"/>
            </Hidden>

            <div className={classes.block__content}>
                <h2 className={classes.block__header}>{ props.title }</h2>
                <span>{ props.description }</span>
                <div className={classes.block__badges}>
                    {
                        props.tags.map(t => <Chip key={t} size="small" label={t} color="primary" />)
                    }
                    <Hidden mdUp>
                        <Button className={classes.block__button_right} color="primary">
                            Добавить
                        </Button>
                    </Hidden>
                </div>
                
            </div>

            <Hidden smDown>
                <div className={classes.block__add_button}>
                    <Button className={classes.block__button} color="primary">
                        Добавить
                    </Button>
                </div>
            </Hidden>      
        </div>
    )
}

export default CardBlock;
