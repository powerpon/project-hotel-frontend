import {
    AppBar,
    Box,
    Container,
    IconButton,
    Toolbar,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import colors from "../constants/colors";
import "../styles/homepage.css";
import {pages} from "../constants/pages";
import NavBarButton from "./NavBarButton";
import NavBarDropDownButton from "./NavBarDropDownButton";
import "../styles/navbar.css";

function NavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div>
            <AppBar sx={{backgroundColor: colors.navColor}} position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box className="burger-wrapper">
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={() => setIsOpen(!isOpen)}>
                                <MenuIcon sx={{color: isOpen ? colors.buttonColor : "white"}}/>
                            </IconButton>
                        </Box>
                        <img className="logo-img" src="public/assets/logo.png" alt="logo"/>
                        <Box className="buttons-wrapper">
                            {pages.map((page, index) => <NavBarButton key={index} page={page}/>)}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {isOpen ? <Box>
                {pages.map((page,index) => <NavBarDropDownButton key={index} page={page}/>)}
            </Box> : null}
        </div>
    );
}

export default NavBar;