import {Box, Typography} from "@mui/material";

interface PropTypes{
    title: string;
    isTitleReversed?: boolean;
    children: JSX.Element;
}

function HomepageSection(props: PropTypes){
    return(
        <div className="section-positioners">
            <Box className="homepage-sections">
                <Typography className="section-titles" sx={{textAlign: props.isTitleReversed ? "right" : "left"}}>
                    {props.title}
                </Typography>
                {props.children}
            </Box>
        </div>
    );
}

export default HomepageSection;