interface ImageProp{
    src: string;
    alt: string;
}

const bannerSources: ImageProp[] = [
    {
        src: "public/assets/slideslika1.webp",
        alt: "slide1"
    },
    {
        src: "public/assets/slideslika2.webp",
        alt: "slide2"
    },
    {
        src: "public/assets/slideslika3.webp",
        alt: "slide3"
    },
    {
        src: "public/assets/slideslika4.webp",
        alt: "slide4"
    },
    {
        src: "public/assets/slideslika5.webp",
        alt: "slide5"
    }
];

const newsSources: ImageProp[] = [
    {
        src: "public/assets/vencanje.webp",
        alt: "vencanje vesti"
    },
    {
        src: "public/assets/poker.webp",
        alt: "poker turnir"
    },
    {
        src: "public/assets/uskrs.webp",
        alt: "uskrs"
    },
    {
        src: "public/assets/pmaj.webp",
        alt: "prvi maj"
    }
];

export {bannerSources, newsSources};
export type {ImageProp};