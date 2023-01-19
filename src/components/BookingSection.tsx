import {Box, Typography} from "@mui/material";
import BookingCards from "./BookingCards";

function BookingSection(){
    return(
        <Box className="booking-sections">
            <Box className="booking-headers">
                <Typography className="section-titles" sx={{width: "50%"}}>
                    Booking.com Recenzije
                </Typography>
                <img style={{width: "100px"}} src="public/assets/booking_logo.png" alt="booking.com"/>
            </Box>
            <BookingCards/>
        </Box>
    );
}

export default BookingSection;