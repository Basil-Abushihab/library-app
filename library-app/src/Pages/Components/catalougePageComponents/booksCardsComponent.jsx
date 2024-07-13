import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import deleteBook from "../../../Controllers/deleteBooks";
import { databaseURL } from "../../../firebase-config/firebase-config";

function BooksCards(props) {
  return (
    <Card
      sx={{
        width: "90%",
        marginTop: "3rem",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 15 }} color="text.primary">
          name: {props.book.title}
        </Typography>

        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          author: {props.book.author}
        </Typography>

        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          isbn: {props.book.isbn}
        </Typography>

        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          ID: {props.book.id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="error"
          onClick={() => {
            deleteBook(
              databaseURL + "books/" + props.book.id + ".json",
              props.book
            );
          }}
          variant="outlined"
        >
          delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default BooksCards;
