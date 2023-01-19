import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import {pages} from "./constants/pages";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-datepicker/dist/react-datepicker.css";

const router = createBrowserRouter(pages);

const theme = createTheme({
   palette: {
       primary: {
           main: "#000"
       }
   }
});

function App() {
    return(
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;