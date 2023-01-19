interface ImageData{
    rows: number;
    cols: number;
    path: string;
}

interface GalleryItems{
    hotelImages: ImageData[],
    food: ImageData[],
    celebrations: ImageData[],
    rooms: ImageData[],
    cityNis: ImageData[]
}

const galleryItems: GalleryItems = {
    hotelImages: [
        {
            rows: 2,
            cols: 2,
            path: "public/assets/slideslika1.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/slideslika3.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/slideslika2.webp"
        },
        {
            rows: 1,
            cols: 2,
            path: "public/assets/bar.webp"
        },
        {
            rows: 1,
            cols: 2,
            path: "public/assets/konferencijska_s.webp"
        },
        {
            rows: 2,
            cols: 2,
            path: "public/assets/restoran.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/slideslika5.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/hrana_slika.webp"
        }
    ],
    food: [
        {
            rows: 2,
            cols: 2,
            path: "public/assets/hrana1.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/hrana6.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/hrana2.webp"
        },
        {
            rows: 1,
            cols: 2,
            path: "public/assets/hrana3.webp"
        },
        {
            rows: 1,
            cols: 2,
            path: "public/assets/hrana4.webp"
        },
        {
            rows: 2,
            cols: 2,
            path: "public/assets/hrana5.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/hrana7.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/hrana8.webp"
        }
    ],
    celebrations: [
        {
            rows: 2,
            cols: 2,
            path: "public/assets/proslava1.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/proslava6.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/proslava2.webp"
        },
        {
            rows: 1,
            cols: 2,
            path: "public/assets/proslava3.webp"
        },
        {
            rows: 1,
            cols: 2,
            path: "public/assets/proslava4.webp"
        },
        {
            rows: 2,
            cols: 2,
            path: "public/assets/proslava5.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/proslava7.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/proslava8.webp"
        }
    ],
    rooms: [
        {
            rows: 2,
            cols: 2,
            path: "public/assets/slideslika4.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/soba1.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/soba2.webp"
        },
        {
            rows: 1,
            cols: 2,
            path: "public/assets/soba3.webp"
        },
        {
            rows: 1,
            cols: 2,
            path: "public/assets/soba4.webp"
        },
        {
            rows: 2,
            cols: 2,
            path: "public/assets/soba5.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/soba6.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/soba7.webp"
        }
    ],
    cityNis: [
        {
            rows: 2,
            cols: 2,
            path: "public/assets/nis1.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/nis2.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/nis3.webp"
        },
        {
            rows: 1,
            cols: 2,
            path: "public/assets/nis4.webp"
        },
        {
            rows: 1,
            cols: 2,
            path: "public/assets/nis5.webp"
        },
        {
            rows: 2,
            cols: 2,
            path: "public/assets/nis6.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/nis9.webp"
        },
        {
            rows: 1,
            cols: 1,
            path: "public/assets/nis8.webp"
        }
    ]
};

export {galleryItems};
export type {ImageData};