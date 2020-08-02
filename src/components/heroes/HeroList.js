import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    // improve performance and only retrieve heroes when publisher changes
    // no re-render if something else it's updated 
    const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ]);
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
