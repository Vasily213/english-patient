import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserData, initializeApp} from "../redux/actions/UserActions";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import {Route, Switch} from "react-router-dom";
import Preloader from "../ui/components/Preloader";
import ResetPassword from "../pages/ResetPassword";
import ConfirmPassword from "../pages/ConfirmPassword";
import MainTeacher from "../pages/MainTeacher";
import CreateBlock from "../pages/CreateBlock";
import DisplayingСards from "../pages/DisplayingCards";
import { Redirect } from 'react-router'
import AddStudent from "../components/addNewStudent/AddStudent";
import AddNewBlock from "../pages/AddNewBlock";
import TransitionsModal from "../components/dialog/modal";


const Routes = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem('auth_token')) {
            Promise.all([dispatch(getUserData())])
                .then(() => dispatch(initializeApp(true)))
        } else dispatch(initializeApp(true));
    }, [dispatch])

    const isInitialized = useSelector(state => state.userReducer.initialized);
    const currentUser = useSelector(state => state.userReducer.user);

    if (!isInitialized)
        return (<Preloader/>);
    else if (currentUser === undefined || currentUser === null)
        return (
            <Switch>
                <Route exact path='/' component={SignIn}/>
                <Route exact path='/new_block' component={AddNewBlock} />
                <Route exact path='/reset' component={ResetPassword}/>
                <Route exact path='/confirm' component={ConfirmPassword}/>
                <Route exact path='/addNewStudent' component={AddStudent}/>
                <Route exact path='/TransitionsModal' component={TransitionsModal}/>
                <Route exact path='/test' component={CreateBlock}/>
                <Route exact path='/test2' component={DisplayingСards}/>
            </Switch>
        );
    else if ((currentUser !== undefined && currentUser.userRole === 'student') || (currentUser.userRole === undefined && currentUser !== undefined))
        return (
            <Switch>
                <Route exact path='/' >
                    {currentUser === undefined || currentUser === null?   <SignIn/> : <Main/>}
                </Route>
                <Route exact path='/TransitionsModal' component={TransitionsModal}/>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        )
    else return (
            <Switch>
                <Route exact path='/' component={MainTeacher}/>
                <Route exact path='/test' component={CreateBlock}/>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        )
};

export default Routes;
