import PropTypes from 'prop-types';


const CardBeer = (props) => {
    return (
        <div className={`flex h-72 w-60 flex-col items-center justify-center bg-amber-500 m-1 rounded-2xl ${props.available ? '' : 'filter blur-lg'}`}>
            <h2 className="inline text-2xl font-bold italic">{props.beerName}</h2>
            <h3 className="inline text-xl font-extrabold">{props.beerStyle}</h3>
            <span className="rounded-lg bg-green-500 p-1 text-center text-xl font-medium text-white">${props.price * 1000}</span>
        </div>

    );
};


CardBeer.propTypes = {
    beerName: PropTypes.string,
    beerStyle: PropTypes.string,
    price: PropTypes.number,
    available: PropTypes.bool,
};


export default CardBeer;
