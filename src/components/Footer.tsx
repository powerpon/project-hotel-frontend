import {Box, Fab, Stack} from "@mui/material";
import "../styles/footer.css";
import {ArrowUpward} from "@mui/icons-material";
import {ContactForm, HotelInfo} from "./index";

function Footer() {
    return (
        <Box id="footer">
            <Stack
                direction={{sm: 'column', md: 'row'}}
                spacing={{xs: 1, sm: 2, md: 40}}>
                <HotelInfo/>
                <ContactForm/>
            </Stack>
            <Fab onClick={() => window.location.href="#"} id="upBtn" variant="extended">
                <ArrowUpward />
            </Fab>
        </Box>
    );
}
export default Footer;