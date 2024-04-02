import PropTypes from 'prop-types';
import CardBeer from '../CardBeer/CardBeer';


const AllBeers = ({beers}) => {
    return (
        <div className='text-white border-orange-500 border-2 p-4 m-4'>
            <h2 className='text-3xl font-black text-center'>All Beers</h2>

            <div className='flex flex-wrap'>
                {
                    beers.map((beer, i) => (
                        <CardBeer 
                            beerName={beer.beerName} 
                            beerStyle={beer.beerStyle} 
                            price={beer.price} 
                            available={beer.available = true}  
                            key={i}/>
                    ))
                }
            </div>
        </div>
    );
};


AllBeers.propTypes = {
    beers: PropTypes.array,
};


export default AllBeers;
