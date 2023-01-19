import {Box, Tooltip} from "@mui/material";
import colors from "../constants/colors";
import homepageIconShortcuts from "../constants/homepage-icon-shortcuts";
import {Link} from "react-router-dom";

function ShortcutMenu(){
    return(
        <div className="section-positioners">
            <Box className="homepage-sections" sx={{borderTop: `5px solid ${colors.navColor}`}}>
                <div className="icon-groups">
                    {homepageIconShortcuts.shortcuts.slice(0,3).map((shortcut, index) =>
                        <Link key={index} to={shortcut.path}><Tooltip title={shortcut.title}>{shortcut.icon}</Tooltip></Link>)}
                </div>
                <div className="icon-groups">
                    {homepageIconShortcuts.shortcuts.slice(3,6).map((shortcut, index) =>
                        <Link className="links" key={index} to={shortcut.path}><Tooltip title={shortcut.title}>{shortcut.icon}</Tooltip></Link>)}
                </div>
            </Box>
        </div>
    );
}

export default ShortcutMenu;