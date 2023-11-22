import amazon1 from "../images/amazon_1.jpg";
const Book = () => {
  return (
    <article className="book-card">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src={amazon1} alt="" />;
const Title = () => {
  return <h2 className="title">Book Title</h2>;
};
const Author = () => {
  return <h4 className="author">Author</h4>;
};
export default Book;
