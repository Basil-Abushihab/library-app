import axios from "axios";

function addBook(url, data) {
  axios
    .put(url, data)
    .then((response) => {
      if (response.data != null) {
        alert("data has been added successfully");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export default addBook;
