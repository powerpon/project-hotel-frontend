interface HotelCardData{
    imagePath: string;
    title: string;
    content: string;
    redirectionPath?: string;
}

const hotelCards: HotelCardData[] = [
    {
        imagePath: "public/assets/slideslika1.webp",
        title: "O HOTELU NIS",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ab delectus reprehenderit minima quaerat sapiente, deserunt dolorum repellendus quas necessitatibus!",
        redirectionPath: "/about-hotel"
    },
    {
        imagePath: "public/assets/slideslika4.webp",
        title: "SOBE / APARTMANI",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ab delectus reprehenderit minima quaerat sapiente, deserunt dolorum repellendus quas necessitatibus!",
        redirectionPath: "/gallery#article-1"
    },
    {
        imagePath: "public/assets/hrana_slika.webp",
        title: "VRHUNSKI SPECIJALITETI JUZNE SRBIJE",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ab delectus reprehenderit minima quaerat sapiente, deserunt dolorum repellendus quas necessitatibus!",
        redirectionPath: "/hotel-services"
    },
    {
        imagePath: "public/assets/proslava.webp",
        title: "PROSLAVE I VESELJA",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ab delectus reprehenderit minima quaerat sapiente, deserunt dolorum repellendus quas necessitatibus!",
        redirectionPath: "/hotel-services#celebration-section"
    }
];

export {hotelCards};
export type {HotelCardData};