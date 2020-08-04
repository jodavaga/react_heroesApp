import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    // parse location to extract searched text
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    
    
    const [ { searchText }, handleInputChange ] = useForm({
        searchText: q
    });

    
    // filter by search text
    //const heroesFiltered = getHeroesByName( searchText );
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        
        // navigate to
        history.push(`?q=${ searchText }`);
    }

    return(
        <>
            <h1>SearchScreen</h1>
            <hr />

            <div className="row mt-3">
                <div className="col-md-4">
                    <form className="form-group" onSubmit={ handleSearch }>
                        <input 
                            className="form-control"
                            placeholder="Search Hero..."
                            autoComplete="off"
                            type="text"
                            name="searchText"
                            value={ searchText }
                            onChange={ handleInputChange }
                            onClick={ (e) => e.target.select() }
                        />

                        <button
                            className="btn btn-block btn-outline-info mt-2"
                            type="submit"

                        >
                            Search
                        </button>
                    </form>
                </div>
            
                <div className="col-md-8">

                    { (!q) && <div className="alert alert-info">
                        Search heroe...
                    </div>}

                    { (q && !heroesFiltered.length) && <div className="alert alert-warning">
                        There is no Hero with: <b>{ q }</b>
                    </div>}

                    {
                        heroesFiltered.map( hero => ( 
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                            )
                        )
                    }
                </div>
            </div>

        </>
    );
}