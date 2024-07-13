import { useEffect, useState } from "react";
import axios from "axios";
import getBooks from "./getBooks";

const useBooks = (url) => {
  const [books, setBooks] = useState(null);

  useEffect(async () => {
    setBooks(await getBooks(url));
    console.log(books);
  }, [url]);
  return [books, setBooks];
};

export default useBooks;
