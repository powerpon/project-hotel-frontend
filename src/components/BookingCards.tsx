import {Stack} from "@mui/material";
import BookingCard from "./BookingCard";
import reviews from "../constants/reviews";

function BookingCards(){
    return (
        <div style={{width: "100%", margin: "40px 0", display: "flex", justifyContent: "center"}}>
            <Stack
                direction={{ sm: 'column', md: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}>
                {reviews.map((review, index) => <BookingCard key={index} rating={review.rating} comment={review.comment} author={review.author}/>)}
            </Stack>
        </div>
    );
}

export default BookingCards;