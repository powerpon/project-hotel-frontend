import Homepage from "../pages/Homepage";
import AboutHotel from "../pages/AboutHotel";
import Reservations from "../pages/Reservations";
import HotelServices from "../pages/HotelServices";
import Gallery from "../pages/Gallery";
import {Fragment} from "react";

interface Page{
    path: string;
    displayName: string;
    element: JSX.Element;

}

const pages: Page[] = [
    {path: "/", displayName: "Pocetna", element: <Homepage />},
    {path: "/about-hotel", displayName: "O Hotelu", element: <AboutHotel />},
    {path: "/reservations", displayName: "Rezervacije", element: <Reservations />},
    {path: "/hotel-services", displayName: "Usluge", element: <HotelServices />},
    {path: "/gallery", displayName: "Galerija", element: <Gallery />},
    {path: "#footer", displayName: "Kontakt", element: <Fragment/>}
]

export {pages};
export type { Page };
