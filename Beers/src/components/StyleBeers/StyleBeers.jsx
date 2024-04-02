import PropTypes from 'prop-types';


const StyleBeers = ({beers}) => {
    let setbeerStyle = new Set(beers.map(beer => beer.beerStyle))
    const beerStyle = [...setbeerStyle]

    return (
        <div className='flex flex-col items-center'>
            <h2 className='font-light italic'>Style Beers</h2>
            <div className='flex flex-row'>
                {
                    beerStyle.map((beer, i) => (
                                <h3 key={i} className='text-xl font-extrabold mx-4'>{beer}</h3>
                        ))
                }
            </div>
        </div>
    );
};


StyleBeers.propTypes = {
    beers: PropTypes.array,
};


export default StyleBeers;
