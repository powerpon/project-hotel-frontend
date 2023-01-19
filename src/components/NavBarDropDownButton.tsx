import {Button} from "@mui/material";
import colors from "../constants/colors";
import {Link, useLocation} from "react-router-dom";
import {Page} from "../constants/pages";
import "../styles/link.css";
import "../styles/navbar.css"

interface PropTypes{
    page: Page;
}

function NavBarDropDownButton(props: PropTypes) {
    const location = useLocation();
    return (
        <Link className="links" to={props.page.path}>
            <Button className="nav-items drop-down-buttons"
                    sx={{
                        color: (location.pathname === props.page.path) ? colors.buttonColor : "white",
                    }}>
                {props.page.displayName}
            </Button>
        </Link>
    );
}

export default NavBarDropDownButton;