import HotelIcon from "@mui/icons-material/Hotel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import {Typography} from "@mui/material";

interface Shortcut{
    path: string;
    title: string;
    icon: JSX.Element;

}

const shortcuts: Shortcut[] = [
    {path: "/gallery#article-1", title: "Sobe i Apartmani", icon: <HotelIcon className="homepage-icons"/>},
    {path: "/reservations", title: "Rezervacije", icon: <CalendarMonthIcon className="homepage-icons"/>},
    {path: "/hotel-services", title: "Restoran", icon: <RestaurantIcon className="homepage-icons"/>},
    {path: "/about-hotel", title: "Besplatan Internet", icon: <WifiIcon className="homepage-icons"/>},
    {path: "/about-hotel", title: "Besplatan Parking", icon: <LocalParkingIcon className="homepage-icons"/>},
    {path: "https://www.linkedin.com/in/stefan-novcic-92a967256/", title: "Stefan Novcic", icon: <Typography className="homepage-icons">SN</Typography>}
]

export default {shortcuts};