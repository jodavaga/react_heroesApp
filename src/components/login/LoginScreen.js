import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/type';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        // history.push('/');
        
        // dispatch action to login using contextReducer
        // @type - @payload
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Made by: Jose D.'
            }
        });
        
        history.replace('/');
        
    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
