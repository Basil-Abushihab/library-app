import "../../../styling/mainStyle/cardsStyle/cards.css";

function BookCards(props) {
  console.log(props.book);
  return (
    <div className="bookCards">
      <h1>{props.book.title}</h1>
      <h2>{props.book.author}</h2>
      <h3>{props.book.isbn}</h3>
    </div>
  );
}
export default BookCards;
