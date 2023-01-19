import HotelCard from "./HotelCard";
import {useNavigate} from "react-router-dom";
import {hotelCards} from "../constants/hotel-cards";
import {Fragment} from "react";

function HomepageHotelCards() {
    const navigate = useNavigate();
    return (
        <Fragment>
            {hotelCards.map((card, index) => <HotelCard key={index} title={card.title} content={card.content}
                                                        imagePath={card.imagePath}
                                                        onClick={() => navigate(card.redirectionPath!)}
                                                        isReversed={index % 2 == 0}/>)}
        </Fragment>
    );
}

export default HomepageHotelCards;