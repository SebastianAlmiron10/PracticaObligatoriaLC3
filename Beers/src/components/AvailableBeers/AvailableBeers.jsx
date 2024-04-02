import PropTypes from 'prop-types';
import CardBeer from '../CardBeer/CardBeer';


const AvailableBeers = ({beers}) => {
    return (
        <div className='border-green-500 border-2 p-4 m-4'>

            <h2 className='text-3xl font-black text-center'>All Beers Available</h2>

            <div className='flex flex-wrap'>
                {
                    beers
                    .filter(beer => beer.available === true)
                    .map((beer, i) => (
                        <CardBeer 
                            beerName={beer.beerName} 
                            beerStyle={beer.beerStyle} 
                            price={beer.price} 
                            available={beer.available} 
                            key={i} />
                    ))
                }
            </div>
        </div>
    );
};


AvailableBeers.propTypes = {
    beers: PropTypes.array,
};


export default AvailableBeers;
