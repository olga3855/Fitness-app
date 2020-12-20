import React from 'react'
import { Route, Redirect } from 'react-router'
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const loggedIn = useSelector(state => state.authReducer.loggedIn);
    return (<Route
        {...rest}
        render={props => {
            if (!loggedIn) {
                return <Redirect to='/login' />
            } else {
                return <Component {...props} />
            }
        }}
    />)
}

export default PrivateRoute;
