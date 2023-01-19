import colors from "../constants/colors";
import {Box, Button, Typography} from "@mui/material";

interface PropTypes{
    isReversed?: boolean;
    title: string;
    content: string;
    imagePath: string;
    onClick?: () => void;
}

function HotelCard(props: PropTypes){
    return(
        <Box className="hotel-cards" style={{flexDirection: props.isReversed ? "row-reverse" : "row"}}>
            <Box className="hote-card-text-wrappers">
                <Typography sx={{fontWeight: "bold", fontSize: "30px", textAlign: "center"}}>
                    {props.title}
                </Typography>
                <Typography sx={{textAlign: "center"}}>
                    {props.content}
                </Typography>
                {props.onClick == null ? null : <Button sx={{backgroundColor: colors.buttonColor}} variant="outlined" onClick={props.onClick}>
                    DETALJI
                </Button>}
            </Box>
            <Box id="image-holder">
                <img style={{objectFit: "cover", width: "100%", height: "100%"}} src={props.imagePath} alt="hotel"/>
            </Box>
        </Box>
    );
}

export default HotelCard;