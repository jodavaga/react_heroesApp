import React, { useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/AuthContext';

const init = () => {
    // get from local storage if there's an user
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const HeroesApp = () => {

    const [ user, dispatch ] = useReducer( authReducer, {}, init);

    return (

        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
