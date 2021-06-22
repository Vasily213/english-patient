import React from 'react';
import {CircularProgress} from "@material-ui/core";

const Preloader = () => {
    return (
        <div style={{position:"absolute", top:'50%', left:'50%'}}>
            <CircularProgress />
        </div>
    );
};

export default Preloader;
