import React, {Fragment} from "react";
import {Box, Typography} from "@mui/material";
import {ImageGallery} from "./index";
import {HotelServiceSectionData} from "../constants/hotel-service-section";

function HotelServiceSection(props: HotelServiceSectionData){
    return(
            <Fragment>
                <Box sx={{width: "70%"}}>
                    <Typography className="hote-services-section-titles" sx={{textAlign: props.isTitleReversed ? "right" : "left"}}>
                        {props.titleTop}
                    </Typography>
                    <img style={{width: "100%", height: "100%"}} src={props.thumbnailPath} alt={props.thumbnailAlt}/>
                    <Typography sx={{margin: "10px 0"}}>
                        {props.contentText}
                    </Typography>
                    <Typography className="hote-services-section-titles">
                        {props.titleBottom}
                    </Typography>
                </Box>
                <ImageGallery images={props.galleryImageData} />
            </Fragment>
    );
}

export default HotelServiceSection;