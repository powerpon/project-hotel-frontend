import {galleryItems, ImageData} from "./gallery-items";

interface HotelServiceSectionData{
    titleTop: string;
    thumbnailPath: string;
    thumbnailAlt: string;
    contentText: string;
    titleBottom: string;
    galleryImageData: ImageData[];
    isTitleReversed?: boolean;
}

const hotelServiceSectionDataToDisplay: HotelServiceSectionData[] = [
    {
        titleTop: "SPECIJALITETI JUŽNE SRBIJE",
        thumbnailPath: "public/assets/hrana_head.webp",
        thumbnailAlt: "hrana",
        contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sem nec massa sodales sodales. Cras tristique elit fringilla dolor viverra condimentum. Sed ultrices in nunc vitae euismod.",
        titleBottom: "GALERIJA",
        galleryImageData: galleryItems.food
    },
    {
        titleTop: "PROSLAVE I VESELJA",
        thumbnailPath: "public/assets/proslava_head.webp",
        thumbnailAlt: "proslava",
        contentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sem nec massa sodales sodales. Cras tristique elit fringilla dolor viverra condimentum. Sed ultrices in nunc vitae euismod.",
        titleBottom: "GALERIJA",
        galleryImageData: galleryItems.celebrations,
        isTitleReversed: true
    }
];

export {hotelServiceSectionDataToDisplay};
export type {HotelServiceSectionData};