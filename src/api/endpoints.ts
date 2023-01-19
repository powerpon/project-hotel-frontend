import axios from "axios";

export default {
    sendContactMessage: async (name: string, email: string, message: string) => {
        await axios.post("http://localhost:5000/createContactMessage", {name: name, email: email, message: message});
    },
    sendReservation: async (roomType: string, numberOfVisitors: number, dateFrom: Date, dateTo: Date) => {
        await axios.post("http://localhost:5000/createReservation", {
            roomType: roomType,
            numberOfVisitors: numberOfVisitors,
            dateFrom: dateFrom,
            dateTo: dateTo
        });
    },
    getAllOccupiedDates: async (year: number, month: number) => {
        return await axios.get("http://localhost:5000/allOccupiedDates", {params: {year: year, month: month}});
    }
}