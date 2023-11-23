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

const EventExamples = () => {
  const handleFormInput = () => {
    console.log("handle form input");
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section style={{ margin: "2rem" }}>
      <form>
        <h2>Basic Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "2rem" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  );
};

const Booklist = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.title} />;
      })}
    </section>
  );
};
export default Booklist;
