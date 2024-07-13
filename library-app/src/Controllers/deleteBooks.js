import axios from "axios";

const deleteBook = (url, data) => {
  data.isDeleted = true;
  axios
    .put(url, data)
    .then((response) => {
      if (response != null) {
        console.log(response);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export default deleteBook;
