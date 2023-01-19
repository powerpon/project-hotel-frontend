import {galleryItems, ImageData} from "./gallery-items";

interface GallerySectionData {
    title: string;
    link?: string;
    body: string;
    imagesToDisplay: ImageData[];
}

const gallerySections: GallerySectionData[] = [
        {
            title: "Hotel Nis",
            link: "Hotel",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam fugit dolores nisi velit fuga debitis ipsam odit? Et praesentium sapiente vitae saepe aut consequatur beatae repellendus ipsa laboriosam? Sequi nihil quo est aliquid tenetu illum, facilis molestiae architecto minus.",
            imagesToDisplay: galleryItems.hotelImages
        },
        {
            title: "Sobe i apartmani",
            body: "Et praesentium sapiente vitae saepe aut consequatur beatae repellendus ipsa laboriosam? Sequi nihil quo est aliquid tenetu illum, facilis molestiae architecto minus.",
            imagesToDisplay: galleryItems.rooms
        },
        {
            title: "Nis",
            body: "Et praesentium sapiente vitae saepe aut consequatur beatae repellendus ipsa laboriosam? Sequi nihil quo est aliquid tenetu illum, facilis molestiae architecto minus. Et praesentium sapiente vitae saepe aut consequatur beatae repellendus ipsa laboriosam? Sequi nihil quo est aliquid tenetu illum, facilis molestiae architecto minus.",
            imagesToDisplay: galleryItems.cityNis
        }
    ];

export default gallerySections;