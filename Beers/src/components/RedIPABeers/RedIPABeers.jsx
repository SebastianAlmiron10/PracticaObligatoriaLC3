import PropTypes from 'prop-types';


const RedIPABeers = ({beers}) => {

    const Red = beers.filter(beer => beer.beerStyle == "Red")
    const Ipa = beers.filter(beer => beer.beerStyle == "IPA")

    return (
        <div className='border-sky-500 border-2 p-4 m-4'>
            <h2>Red Beer: {Red.length}</h2>
            <h2>IPA Beer: {Ipa.length}</h2>
        </div>
    );
};


RedIPABeers.propTypes = {
    beers: PropTypes.array,
};


export default RedIPABeers;
