import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

// prop "history" from router component
export const HeroeScreen = ( { history } ) => {

    // route params hook
    const { heroId } = useParams();
    // console.log( heroId );

    const hero = getHeroById( heroId );

    // If no hero found, redirect to Home
    if ( !hero ) return <Redirect to="/" />

    const {  superhero, publisher, alter_ego, first_appearance, characters } = hero;

    const handleBack = () => {
        console.log(history.length);

        // if history not found, redirect to Home
        if ( history.length <= 2 ) {
            history.push("/");
        } else {
            history.goBack();
        }

    }


    return (
        <div>
            <h1>HeroeScreen</h1>
            <hr />

            <div className="row">
                <div className="col-md-4">
                    <img className="img-thumbnail" src={ `/assets/heroes/${ heroId }.jpg` } alt={ superhero }/>
                </div>

                <div className="col-md-8">
                    <h3>{ superhero }<small> - { publisher }</small></h3>

                    <ul className="list-group list-group-flush mt-5">
                        <li className="list-group-item"><b>Publisher:</b> { publisher } </li>
                        <li className="list-group-item"><b>Alter ego:</b> { alter_ego } </li>
                        <li className="list-group-item"><b>First appareance:</b> { first_appearance } </li>
                    </ul>

                    <h5 className="mt-5">Characters:</h5>
                    <p>{ characters }</p>

                    <button
                        className="btn btn-outline-info"
                        onClick={ handleBack }
                    >
                        Back
                    </button>
                </div>

            </div>

        </div>
    )
}
