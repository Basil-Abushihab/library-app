import useBooks from "../Controllers/getBooksHook";
import { databaseURL } from "../firebase-config/firebase-config";
import "../styling/catalougeStyle/catalougeStyle.css";
import { CircularProgress } from "@mui/material";
import { Container } from "@mui/material";
import BooksCards from "./Components/catalougePageComponents/booksCardsComponent";
import "../styling/catalougeStyle/catalougeStyle.css";
import Books from "../models/booksModel";
import addBook from "../Controllers/addBook";
import getBooks from "../Controllers/getBooks";

const CatalougePage = () => {
  const [booksData, setBooks] = useBooks(databaseURL + "/books.json");
  const addBookFormController = async (event) => {
    event.preventDefault();
    const form = event.target;

    let book = new Books({
      author: form.author.value,
      title: form.title.value,
      isbn: form.isbn.value,
      id: booksData.length,
      isDeleted: false,
    });

    addBook(databaseURL + "books/" + book.id + ".json", book);

    setBooks(await getBooks(databaseURL + "/books.json"));
    console.log(booksData);
  };

  if (booksData == null) {
    return (
      <Container
        maxWidth={false}
        sx={{
          width: "70rem",
          height: "60rem",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <>
      <Container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1rem",
          border: "1px solid black",
          borderRadius: "8px",
        }}
      >
        {booksData.map((book) => {
          console.log(book.isDeleted);
          if (!book.isDeleted) {
            return <BooksCards key={book.id} book={book} />;
          }
        })}
      </Container>

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1.5rem",
          width: "30rem",
          backgroundColor: "#569cfe",
          borderRadius: "8px",
          flexDirection: "column",
          color: "white",
          marginBottom: "1.5rem",
          boxShadow: "2px 2px black",
        }}
      >
        <h1>Add book</h1>
        <form onSubmit={addBookFormController} id="book-form">
          <br />
          <label className="book-fields-labels">Title</label>
          <br />

          <input
            type="text"
            className="book-fields"
            placeholder="Please input book title"
            name="title"
          />
          <br />
          <br />
          <label className="book-fields-labels">Author</label>

          <br />

          <input
            type="text"
            className="book-fields"
            placeholder="Please input book author"
            name="author"
          />
          <br />
          <br />
          <label className="book-fields-labels">isbn</label>

          <br />

          <input
            type="text"
            className="book-fields"
            placeholder="Please input book isbn"
            name="isbn"
          />
          <br />
          <br />
          <div>
            <button id="book-submit-button">Submit</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default CatalougePage;
