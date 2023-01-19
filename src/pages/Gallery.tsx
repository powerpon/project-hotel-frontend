import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Fragment} from "react";
import "../styles/gallery.css";
import gallerySections from "../constants/gallery-sections";
import colors from "../constants/colors";
import {AnchorProvider, Footer, ImageGallery, NavBar} from "../components";

function Gallery() {
    return (
        <AnchorProvider>
            <Fragment>
                <NavBar/>
                <Box className="gallery-sections">
                    {
                        gallerySections.map((item, index) => {
                            return (<Fragment key={index}>
                                    <Box id={"article-" + index} sx={{width: "50%", margin: "20px 0"}}>
                                        <Typography className="gallery-titles">
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{textAlign: "center"}}>
                                            {item.link ? <Link style={{color: colors.quoteColor}}
                                                               to={"/about-hotel"}>{item.link} </Link> : null}
                                            {item.body}
                                        </Typography>
                                    </Box>
                                    <Box sx={{width: "80%", marginBottom: "40px"}}>
                                        <ImageGallery images={item.imagesToDisplay}/>
                                    </Box>
                                </Fragment>
                            );
                        })
                    }
                </Box>
                <Footer/>
            </Fragment>
        </AnchorProvider>
    );
}

export default Gallery;