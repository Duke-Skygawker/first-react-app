import amazon1 from "../images/amazon_1.jpg";
import amazon2 from "../images/amazon_2.jpg";
import amazon3 from "../images/amazon_3.jpg";
import Book from "./book.js";
const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        imgSrc={amazon1}
        author={"Matthew Perry"}
        title={"The Big Terrible Thing"}
      />
      <Book
        imgSrc={amazon2}
        author={"Rebecca Yarros"}
        title={"Fourth Wing (The Empyrean, 1)"}
      />
      <Book
        imgSrc={amazon3}
        author={"Suzanne Collins"}
        title={"The Ballad of Songbirds and Snakes"}
      />
      <Book
        imgSrc={amazon1}
        author={"Matthew Perry"}
        title={"The Big Terrible Thing"}
      />
    </section>
  );
};
export default Booklist;
