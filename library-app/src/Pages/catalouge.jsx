import useBooks from "../Controllers/getBooksHook";
import { databaseURL } from "../firebase-config/firebase-config";

import { CircularProgress } from "@mui/material";
import { Container } from "@mui/material";
import BooksCards from "./Components/catalougePageComponents/booksCardsComponent";

import Books from "../models/booksModel";
import addBook from "../Controllers/addBook";
import getBooks from "../Controllers/getBooks";
import { useState } from "react";

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

    await addBook(databaseURL + "books/" + book.id + ".json", book);
    let changedBooks = await getBooks(databaseURL + "/books.json");
    setBooks(changedBooks);
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
        <h1 className="text-3xl font-bold">Add book</h1>
        <form
          onSubmit={addBookFormController}
          id="book-form"
          className="flex flex-col"
        >
          <label className="text-white text-base mb-2">Title</label>
          <input
            type="text"
            className="border-none rounded-md px-3 py-2 bg-blue-900 w-80 h-10 text-white mb-4"
            placeholder="Please input book title"
            name="title"
          />
          <label className="text-white text-base mb-2">Author</label>
          <input
            type="text"
            className="border-none rounded-md px-3 py-2 bg-blue-900 w-80 h-10 text-white mb-4"
            placeholder="Please input book author"
            name="author"
          />
          <label className="text-white text-base mb-2">ISBN</label>
          <input
            type="text"
            className="border-none rounded-md px-3 py-2 bg-blue-900 w-80 h-10 text-white mb-4"
            placeholder="Please input book isbn"
            name="isbn"
          />
          <div className="flex justify-end items-center my-8">
            <button
              id="book-submit-button"
              className="border-none w-20 h-8 text-center rounded-md bg-white text-black"
            >
              Submit
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default CatalougePage;
