import StarRateIcon from '@mui/icons-material/StarRate';
import "../styles/homepage.css";
import "../styles/link.css";
import {
    AnchorProvider,
    BannerSlideShow,
    BookingSection, Footer,
    HomepageSection,
    HomepageHotelCards,
    NavBar,
    ShortcutMenu
} from "../components";
import {Fragment} from "react";
import {Box} from "@mui/material";
import {Carousel} from "react-responsive-carousel";
import {ImageProp, newsSources} from "../constants/slide-imgs";


function Homepage() {
    return (
        <AnchorProvider>
            <Fragment>
                <NavBar/>
                <BannerSlideShow/>
                <Box className="star-wrappers">
                    {Array.from(Array(5)).map((_, index) => <StarRateIcon key={index} className="stars"/>)}
                </Box>
                <ShortcutMenu/>
                <HomepageSection title={"VESTI"}>
                    <Carousel infiniteLoop={true} showThumbs={false} showStatus={false} dynamicHeight={true}
                              showArrows={false} autoPlay={true}>
                        {newsSources.map((source: ImageProp, index: number) =>
                            <img className="slide-imgs" key={index} src={source.src} alt={source.alt}/>)}
                    </Carousel>
                </HomepageSection>
                <HomepageSection title={"O HOTELU"} isTitleReversed>
                        <HomepageHotelCards/>
                </HomepageSection>
                <BookingSection/>
                <Footer/>
            </Fragment>
        </AnchorProvider>
    );
}

export default Homepage;