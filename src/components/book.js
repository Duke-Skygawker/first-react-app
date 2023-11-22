const Book = (props) => {
  return (
    <article className="book-card">
      <Image imgSrc={props.imgSrc} />
      <Title title={props.title} />
      <Author author={props.author} />
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
