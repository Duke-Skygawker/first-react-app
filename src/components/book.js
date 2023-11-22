const Book = ({ imgSrc, title, author }) => {
  return (
    <article className="book-card">
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
  return <h4 className="author">{author}</h4>;
};
export default Book;
