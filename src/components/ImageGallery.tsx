import {Box, ImageList, ImageListItem, Modal} from "@mui/material";
import React, {Fragment, useState} from "react";

interface ImageItem {
    rows: number;
    cols: number;
    path: string;
}

interface PropTypes {
    images: ImageItem[];
}

function ImageGallery(props: PropTypes) {
    const [open, setOpen] = React.useState(false);
    const [imagePath, setImagePath] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Fragment>
            <ImageList
                sx={{width: "100%"}}
                variant="quilted"
                cols={4}
                rowHeight={121}>
                {props.images.map((item, index) => (
                    <ImageListItem key={index} className="gallery-imgs" onClick={() => {
                        setImagePath(item.path);
                        handleOpen();
                    }} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            src={item.path}
                            alt="hrana"
                            loading="lazy"/>
                    </ImageListItem>))}
            </ImageList>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box className="modals">
                    <img style={{width: "100%", height: "100%"}} alt="image" src={imagePath}/>
                </Box>
            </Modal>
        </Fragment>
    );
}

export default ImageGallery;