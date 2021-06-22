import React from 'react';

import { Drawer, makeStyles, Toolbar} from "@material-ui/core";



const LeftSideBar = () => {

    const classes = useStyles();

    return (
        <Drawer className={classes.drawer}
                classes={{paper: classes.drawerPaper}}
                variant="permanent" anchor="left">
            <Toolbar/>

        </Drawer>
    );
};


const useStyles = makeStyles((theme) => (
    {

        drawer: {
            width: 300,
            flexShrink: 0,
        },

        drawerPaper: {
            height: "100vh",
            width: 300,
            [theme.breakpoints.down('sm')]:
                {
                    display: 'none',
                },
        },


    }
));

export default LeftSideBar;
