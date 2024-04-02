import PropTypes from 'prop-types';


const ContainerP = ({children}) => {
    return (
        <div className='bg-[#242424] text-white p-4 flex flex-col items-center'>
            {children}
        </div>
    );
};


ContainerP.propTypes = {
    children: PropTypes.node,
};


export default ContainerP;
