interface BookingReview{
    author: string;
    comment: string;
    rating: number;
}

const reviews: BookingReview[] = [
    {
        author: "Pera Peric",
        comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, veniam voluptatibus. Accusamus dolor veniam, dolorem adipisci tenetur esse fugit facilis?",
        rating: 10
    },
    {
        author: "Boban",
        comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, veniam voluptatibus. Accusamus dolor veniam, dolorem adipisci tenetur esse fugit facilis?",
        rating: 9
    },
    {
        author: "Radomir Radomirovic",
        comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, veniam voluptatibus. Accusamus dolor veniam, dolorem adipisci tenetur esse fugit facilis?",
        rating: 10
    }
];

export default reviews;