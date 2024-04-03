import './App.css'
import { BookItem } from './components/BookItem/BookItem';


const App = () => {


  const books = [
    {
      bookTitle: "100 años de soledad",
      bookAuthor: "Gabriel García Márquez",
      bookRating: Array(5).fill('*'),
      pageCount: 410,
      imageUrl: "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
    },
    {
      bookTitle: "Asesinato en el Orient Express",
      bookAuthor: "Agatha Christie",
      bookRating: Array(4).fill("*"),
      pageCount: 256,
      imageUrl: "https://m.media-amazon.com/images/I/71Sb60uKFbL._SY425_.jpg",
    },
    {
      bookTitle: "Las dos torres",
      bookAuthor: "J.R.R. Tolkien",
      bookRating: Array(5).fill("*"),
      pageCount: 352,
      imageUrl: "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      bookTitle: "50 sombras de Grey",
      bookAuthor: "E.L. James",
      bookRating: Array(1).fill("*"),
      pageCount: 514,
      imageUrl: "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
    },
    {
      bookTitle: "El código Da Vinci",
      bookAuthor: "Dan Brown",
      bookRating: Array(4).fill("*"),
      pageCount: 590,
      imageUrl: "https://m.media-amazon.com/images/I/A1L-ulNrn+L._SY425_.jpg",
    },
    {
      bookTitle: "Harry Potter y la piedra filosofal",
      bookAuthor: "J.K. Rowling",
      bookRating: Array(5).fill("*"),
      pageCount: 336,
      imageUrl: "https://m.media-amazon.com/images/I/81klJGqMlcL._SY425_.jpg",
    },
    {
      bookTitle: "Cien años de soledad",
      bookAuthor: "Gabriel García Márquez",
      bookRating: Array(5).fill("*"),
      pageCount: 417,
      imageUrl: "https://m.media-amazon.com/images/I/91m51NXjg6L._SY425_.jpg",
    },
    {
      bookTitle: "1984",
      bookAuthor: "George Orwell",
      bookRating: Array(5).fill("*"),
      pageCount: 368,
      imageUrl: "https://m.media-amazon.com/images/I/41L+OrmfZML._SY445_SX342_.jpg",
    },
    {
      bookTitle: "Don Quijote de la Mancha",
      bookAuthor: "Miguel de Cervantes",
      bookRating: Array(4).fill("*"),
      pageCount: 1056,
      imageUrl: "https://m.media-amazon.com/images/I/51zh5LauEGL._SY445_SX342_.jpg",
    },
    {
      bookTitle: "Orgullo y prejuicio",
      bookAuthor: "Jane Austen",
      bookRating: Array(5).fill("*"),
      pageCount: 388,
      imageUrl: "https://m.media-amazon.com/images/I/A1H6n6dj+GL._SY425_.jpg",
    },
    {
      bookTitle: "El Alquimista",
      bookAuthor: "Paulo Coelho",
      bookRating: Array(5).fill("*"),
      pageCount: 192,
      imageUrl: "https://m.media-amazon.com/images/I/61PZrOxnKrL._SY425_.jpg",
    },
    {
      bookTitle: "El principito",
      bookAuthor: "Antonie de Saint Exupéry",
      bookRating: Array(4).fill("*"),
      pageCount: 89,
      imageUrl: "https://m.media-amazon.com/images/I/51r72khRTwL._SY425_.jpg",
    },
  ];


  return (
    <div className='container mx-auto'>
      <h2 className='text-2xl font-bold italic'>Books Champion App</h2>
      <p className='text-lg italic'>¡Quiero leer un libro!</p>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 justify-items-center'>
        {
          books.map((book, i) => (
            <BookItem 
            bookTitle={book.bookTitle} 
            bookAuthor={book.bookAuthor} 
            bookRating={book.bookRating}
            pageCount={book.pageCount} 
            imageUrl={book.imageUrl}
            key={i}
            />
          ))
    
        }
      </section>
    </div>
  );
}
export default App;