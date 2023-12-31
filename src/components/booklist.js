import Book from "./Book.js";
import { books } from "./books.js";

const Booklist = () => {
  return (
    <>
      <h1 className="booklist-heading">Amazon's Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          const bookIndex = index + 1;
          return <Book {...book} key={book.title} bookIndex={bookIndex} />;
        })}
      </section>
    </>
  );
};
export default Booklist;
