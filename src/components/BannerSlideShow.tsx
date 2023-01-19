import {Carousel} from "react-responsive-carousel";
import {bannerSources, ImageProp} from "../constants/slide-imgs";
import {Box} from "@mui/material";

function BannerSlideShow(){
    return(
        <Box style={{backgroundColor: "black"}}>
            <Carousel autoPlay={false} infiniteLoop={true} showThumbs={false} showStatus={false}
                      showIndicators={false} dynamicHeight={true}>
                {bannerSources.map((source: ImageProp, index: number) =>
                    <img className="slide-imgs" key={index} src={source.src} alt={source.alt}/>)}
            </Carousel>
        </Box>
    );
}

export default BannerSlideShow;