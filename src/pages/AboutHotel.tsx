import {Box} from "@mui/material";
import colors from "../constants/colors";
import "../styles/homepage.css";
import {Fragment} from "react";
import {AboutHotelCards, AnchorProvider, Footer, NavBar} from "../components";

function AboutHotel() {
    return (
        <AnchorProvider>
            <Fragment>
                <NavBar/>
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <Box className="homepage-sections" sx={{backgroundColor: colors.cardColor}}>
                        <AboutHotelCards/>
                    </Box>
                </div>
                <Footer/>
            </Fragment>
        </AnchorProvider>
    );
}

export default AboutHotel;