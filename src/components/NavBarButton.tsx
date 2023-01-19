import {Button} from "@mui/material";
import colors from "../constants/colors";
import {Link, useLocation} from "react-router-dom";
import {Page} from "../constants/pages";
import "../styles/link.css";

interface PropTypes{
    page: Page;
}

function NavBarButton(props: PropTypes) {
    const location = useLocation();
    return (
        <Link className="links" to={props.page.path}>
            <Button className="nav-items"
                    sx={{
                        color: (location.pathname === props.page.path) ? colors.buttonColor : "white",
                        display: 'block'
                    }}>
                {props.page.displayName}
            </Button>
        </Link>
    );
}

export default NavBarButton;