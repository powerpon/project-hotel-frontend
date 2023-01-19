import {Box, Button, FormControl, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Fragment, useEffect, useState} from "react";
import {toast} from "react-toastify";
import endpoints from "../api/endpoints";
import {AnchorProvider, Footer, NavBar} from "../components";
import "../styles/reservations.css";
import properties from "../constants/toast";
import DatePicker from "react-datepicker";

function Reservations() {
    const [roomType, setRoomType] = useState("Jednosoban Apartman");
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [numberOfVisitors, setNumberOfVisitors] = useState(1);
    const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
    const [datesToDisable, setDatesToDisable] = useState<Date[]>([]);

    async function refreshOccupiedDates() {
        const occupiedDates = await endpoints.getAllOccupiedDates(currentYear, currentMonth);
        setDatesToDisable(occupiedDates.data.map((d: string) => new Date(d)));
    }

    useEffect(() => {
        refreshOccupiedDates();
    }, [currentMonth, currentYear]);
    return (
        <AnchorProvider>
            <Fragment>
                <NavBar/>
                <Box className="reservations-section-wrappers">
                    <Typography className="reservations-labels">
                        Izaberite tip sobe:
                    </Typography>
                    <Box className="reservations-form-wrappers">
                        <FormControl sx={{backgroundColor: "white"}}>
                            <Select
                                id="demo-simple-select"
                                value={roomType}
                                onChange={(e) => setRoomType(e.target.value as string)}>
                                <MenuItem value={"Jednosoban Apartman"}>Jednosoban Apartman</MenuItem>
                                <MenuItem value={"Dvosoban Apartman"}>Dvosoban Apartman</MenuItem>
                                <MenuItem value={"Trosoban Apartman"}>Trosoban Apartman</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Typography className="reservations-labels">
                        Izaberite broj osoba:
                    </Typography>
                    <Box className="reservations-form-wrappers">
                        <TextField onChange={(e) => setNumberOfVisitors(e.target.value as unknown as number)}
                                   sx={{backgroundColor: "white"}} type="number" id="outlined-basic" variant="outlined"
                                   defaultValue={1} inputProps={{min: 1, max: 6}}/>
                    </Box>
                    <Typography className="reservations-labels">
                        Izaberite interval boravka:
                    </Typography>
                    <Box className="reservations-form-wrappers">
                        <DatePicker
                            onChange={(dates) => {
                                const [start, end] = dates;
                                setStartDate(start);
                                setEndDate(end);
                            }}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            minDate={new Date()}
                            onMonthChange={(date) => {
                                setCurrentYear(date.getFullYear());
                                setCurrentMonth(date.getMonth());
                            }}
                            excludeDates={
                                datesToDisable
                            }
                            inline/>
                    </Box>
                    <Box className="reservations-form-wrappers">
                        <Button onClick={async () => {
                            if (startDate == undefined || endDate == undefined || startDate == endDate) {
                                toast.error('Izaberite interval boravka!', properties);
                                return;
                            }
                            try {
                                await endpoints.sendReservation(roomType, numberOfVisitors, startDate, endDate);
                                window.location.reload();
                                toast.success('Datum uspesno rezervisan!', properties);
                            } catch (err) {
                                toast.error('Datum zauzet!', properties);
                                return;
                            }
                        }} className="reserve-btns" variant="outlined">
                            Rezervisi
                        </Button>
                    </Box>
                </Box>
                <Footer/>
            </Fragment>
        </AnchorProvider>
    );
}
export default Reservations;