import InputBook from "../../components/InputBook";
const Book = () => {
  const books = [
    {
      id: 1,
      title: 'Ulsan',
      author: 'Thomas Hunk',
      genre: 'Music',
      completed: 10,
    },
    {
      title: 'Mucks',
      author: 'King Robert',
      genre: 'Science Fiction',
      completed: 8,
      id: 1,
    },
    {
      title: 'Koran',
      author: 'Bullet smoke',
      genre: 'Magic',
      completed: 8,
      id: 1,
    }
  ].map((book) => <div className="li--book" key={book.id}  completed={book.completed}>
    <h2 className="title" >{book.title} </h2>
    <span className="author">{book.author}</span>
    <span className="genre">{book.genre}</span>
  </div>);

  return ( 
    <div>
      <div className="book--container">{books}</div>
      < InputBook />
    </div>

   );
}
 
export default Book;