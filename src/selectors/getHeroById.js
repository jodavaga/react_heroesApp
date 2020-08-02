import { heroes } from '../data/heroes';

// Return a hero by id
export const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id);
}