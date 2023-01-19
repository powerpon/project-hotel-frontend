import {Box, Typography} from "@mui/material";
import colors from "../constants/colors";
import "../styles/homepage.css";
import "../styles/hotelservices.css";
import React, {Fragment} from "react";
import "../styles/gallery.css";
import {AnchorProvider, Footer, HotelServiceSection, NavBar} from "../components";
import {HotelServiceSectionData, hotelServiceSectionDataToDisplay} from "../constants/hotel-service-section";

function HotelServices() {
    return (
        <AnchorProvider>
            <Fragment>
                <NavBar/>
                <Box className="hotel-services-section-wrappers">
                    <Box className="homepage-sections"
                         sx={{backgroundColor: colors.cardColor, justifyContent: "center", borderBottom: "0px"}}>
                        {hotelServiceSectionDataToDisplay.map((dataToDisplay: HotelServiceSectionData, index) =>
                            <HotelServiceSection key={index} titleTop={dataToDisplay.titleTop}
                                                 thumbnailPath={dataToDisplay.thumbnailPath}
                                                 thumbnailAlt={dataToDisplay.thumbnailAlt}
                                                 contentText={dataToDisplay.contentText}
                                                 titleBottom={dataToDisplay.titleBottom}
                                                 galleryImageData={dataToDisplay.galleryImageData}
                                                 isTitleReversed={index % 2 == 0}/>
                        )}
                    </Box>
                </Box>
                <Footer/>
            </Fragment>
        </AnchorProvider>
    );
}

export default HotelServices;