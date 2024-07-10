import { useState } from "react";
import BookCards from "./cards";
import "../../styling/mainStyle/main.css";

function Main() {
    const initState = {
        books: [
            {
                id: 1,
                title: "مقدمة ابن خلدون",
                author: "ابن خلدون",
                isbn: "1289499030"
            },
            {
                id: 2,
                title: "الحاوي في الطب",
                author: "ابو بكر الرازي",
                isbn: "893847239479"
            },
            {
                id: 3,
                title: "الأدب الكبير",
                author: "ابن المقفع",
                isbn: "9786144253427"
            },
            {
                id: 4,
                title: "كليلة ودمنة",
                author: "عبد الله بن المقفع",
                isbn: "9789953386725"
            },
            {
                id: 5,
                title: "الجامع لأحكام القرآن",
                author: "الإمام القرطبي",
                isbn: "9782745100507"
            },
            {
                id: 6,
                title: "كتاب الأغاني",
                author: "أبو الفرج الأصفهاني",
                isbn: "9789770911205"
            },
            {
                id: 7,
                title: "حي بن يقظان",
                author: "ابن طفيل",
                isbn: "9789953891182"
            }
        ]
    };
    
    const [state, setBooks] = useState(initState);

    return (
        <div id="cards-container">
            {state.books.map((book) => (
                <BookCards key={book.id} book={book} />
            ))}
        </div>
    );
}

export default Main;
