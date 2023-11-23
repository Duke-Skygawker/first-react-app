const Book = ({ imgSrc, title, author, getBook }) => {
  const getSingleBook = () => {
    getBook(title);
  };
  return (
    <article className="book-card">
      <Image imgSrc={imgSrc} />
      <Title title={title} />
      <Author author={author} />
      <button onClick={getSingleBook}>Display Title</button>
    </article>
  );
};

const Image = ({ imgSrc }) => <img src={imgSrc} alt="" />;
const Title = ({ title }) => {
  return <h2 className="title">{title}</h2>;
};
const Author = ({ author }) => {
  return (
    <h4 className="author" style={{ color: "white", letterSpacing: "1px" }}>
      {author}
    </h4>
  );
};
export default Book;
