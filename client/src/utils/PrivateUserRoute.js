import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {checkAuth} from './userTokenAuth';

export default function PrivateUserRoute({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) =>
                checkAuth() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: props.location},
                        }}
                    />
                )
            }
        />
    );
}
