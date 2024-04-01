import PropTypes from 'prop-types';
import './BookItem.css'
import { Star } from '../Star/Star';
//<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor" /></svg>

const BookItem = (props) => {

    BookItem.propTypes = {
        bookTitle: PropTypes.string,
        bookAuthor: PropTypes.string,
        bookRating: PropTypes.array,
        pageCount: PropTypes.number,
        imageUrl: PropTypes.string,
    };

    return (
        <div 
        className="
            css  
            sm:w-full 
            min-w-18 
            h-[32rem] 
            z-0 
            bg-gray-300 
            transition 
            ease-in-out 
            rounded-lg 
            shadow-xl 
            overflow-hidden 
            hover:shadow-2xl 
            duration-300 
            relative">
                
            <img
                className="w-full h-full transition duration-900 object-cover "
                src={props.imageUrl}
                alt={props.bookTitle}
            ></img>
            <div className="absolute inset-0 hidden flex-col justify-center items-center">
                <h2 className="text-xl font-bold mb-3 text-center text-white">
                    {props.bookTitle}
                </h2>
                <h4 className="text-l mb-3 italic font-thin text-white">
                    by {props.bookAuthor}
                </h4>
                <p className="flex text-[16px] mb-4 text-white">
                    {props.bookRating.map((_, index) => <Star key={index}/>)}
                </p>
                <p className="text-[16px] font-extralight mb-4 text-white">{props.pageCount} pages</p>
            </div>
        </div>



    );
};
export { BookItem }