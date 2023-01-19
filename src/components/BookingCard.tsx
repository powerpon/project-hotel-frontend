import {Box, Typography} from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface PropTypes{
    rating: number;
    comment: string;
    author: string;
}

function BookingCard(props: PropTypes){
    return(
        <Box className="booking-card">
            <Box className="rating-boxes">
                <Typography className="booking-texts">
                    {props.rating}
                </Typography>
            </Box>
            <Typography sx={{textAlign: "center", color: "white", fontSize: "18px", margin: "40px"}}>
                {props.comment}
            </Typography>
            <FormatQuoteIcon className="booking-quotes"/>
            <Typography className="booking-texts">
                {props.author}
            </Typography>
        </Box>
    );
}

export default BookingCard;