const Book = () => {
  return (
    <article className="book-card">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <h2>Image Placeholder</h2>;
const Title = () => {
  return <h2>Book Title</h2>;
};
const Author = () => {
  return <h4>Author</h4>;
};
export default Book;
