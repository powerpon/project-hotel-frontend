import HotelCard from "./HotelCard";
import {Fragment} from "react";
import aboutHotelCards from "../constants/about-hotel-cards";

function HomepageHotelCards() {
    return (
        <Fragment>
            {aboutHotelCards.map((card, index) => <HotelCard key={index} title={card.title} content={card.content}
                                                        imagePath={card.imagePath}
                                                        isReversed={index % 2 == 1}/>)}
        </Fragment>
    );
}

export default HomepageHotelCards;