import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard =  ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters, 
}) => {
    return(
        <div className="card ms-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-5">
                    <img src={ `/assets/heroes/${ id }.jpg` } className="card-img" alt={ superhero } />
                </div>
                
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title mb-0">{ superhero }</h5>
                        <small className="card-text">{ alter_ego }</small>
                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>    
                        </p>
                        {
                            ( alter_ego !== characters )
                            && (<p className="card-text">{ characters }</p>)
                        }
    
                        <Link className="card-text" to={ `/hero/${ id }` }> Ver mas...</Link> 
                        
                    </div>
                </div>

            </div>
        </div>
    )
}