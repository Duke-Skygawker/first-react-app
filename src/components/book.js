const Book = ({ imgSrc, title, author, bookIndex }) => {
  return (
    <article className="book-card">
      <p className="book-index">{bookIndex}</p>
      <Image imgSrc={imgSrc} />
      <Title title={title} />
      <Author author={author} />
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
