import amazon1 from "../images/amazon_1.jpg";
import amazon2 from "../images/amazon_2.jpg";
import amazon3 from "../images/amazon_3.jpg";
import Book from "./book.js";

const books = [
  {
    author: "Matthew Perry",
    imgSrc: amazon1,
    title: "The Big Terrible Thing",
  },
  {
    author: "Rebecca Yarros",
    imgSrc: amazon2,
    title: "Fourth Wing (The Empyrean, 1)",
  },
  {
    author: "Suzanne Collins",
    imgSrc: amazon3,
    title: "The Ballad of Songbirds and Snakes",
  },
];
const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book
            imgSrc={book.imgSrc}
            title={book.title}
            author={book.author}
            key={book.title}
          />
        );
      })}
    </section>
  );
};
export default Booklist;
