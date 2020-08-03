import React from 'react';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {

    const heroesFiltered = heroes;

    const [ { searchText }, handleInputChange, reset ] = useForm({
        searchText: ''
    });

    const handleSearch = (e) => {
        e.preventDefault();

        console.log(searchText);

        // reset form
        reset();
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