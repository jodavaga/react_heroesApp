import { heroes } from '../data/heroes';

// Return an array of heroes by publisher
export const getHeroesByPublisher = ( publisher ) => {

    const validData = ['DC Comics', 'Marvel Comics'];

    if ( !validData.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }", not found`);
    }

    return heroes.filter( hero => hero.publisher === publisher);
}