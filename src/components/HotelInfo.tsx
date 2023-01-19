import {Box, Tooltip, Typography} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

function HotelInfo(){
    return(
        <Box>
            <Typography className="hi-titles">
                Kontakt
            </Typography>
            <Typography className="hi-infos">
                Hotel "Hotel"<br/>
                Bulevar Nemanjića 13, 1800 Niš<br/>
                www.hotel.com
            </Typography>
            <Typography className="hi-infos">
                Recepcija: 018/80-00-00<br/>
                Agencija: 018/80-11-11<br/>
                Fax: 018/80-22-22<br/>
                Email: hotel@gmail.com
            </Typography>
            <Box className="icon-wrappers">
                <a href="https://www.facebook.com/" target="_blank"><Tooltip title="Facebook"><FacebookIcon
                    className="socials"/></Tooltip></a>
                <a href="https://www.youtube.com/" target="_blank"><Tooltip title="Youtube"><YouTubeIcon
                    className="socials"/></Tooltip></a>
                <a href="https://www.instagram.com/" target="_blank"><Tooltip title="Instagram"><InstagramIcon
                    className="socials"/></Tooltip></a>
            </Box>
        </Box>
    );
}

export default HotelInfo;