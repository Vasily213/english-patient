import React from 'react';
import MainAppBar from "../components/appBar";
import RightSideBar from "../components/sideBar/rightSideBar";
import LeftSideBar from "../components/sideBar/leftSideBar";

const Main = ({children}) => {

    return (
        <>
            <MainAppBar>
                <LeftSideBar/>
                <RightSideBar/>
            </MainAppBar>
        </>
    )
}
/*
const useStyles = makeStyles((theme) => (
    {

        content: {
            flexGrow: 1,
            padding: "0 240px 0 300px"
        },

    }
));*/
export default Main;


