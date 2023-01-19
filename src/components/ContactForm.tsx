import {Box, Button, TextField} from "@mui/material";
import {toast, ToastContainer} from "react-toastify";
import properties from "../constants/toast";
import endpoints from "../api/endpoints";
import {useState} from "react";

function ContactForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    return(
        <Box className="form-wrappers">
            <TextField value={name} onChange={e => setName(e.target.value)} className="formInputs"
                       label="Vase ime" variant="outlined"/>
            <TextField value={email} onChange={e => setEmail(e.target.value)} className="formInputs"
                       label="Vas email" variant="outlined"/>
            <TextField value={message} onChange={e => setMessage(e.target.value)} className="formInputs"
                       label="Vasa poruka"
                       multiline
                       rows={4}/>
            <Button onClick={async () => {
                if(name.trim().length === 0 || email.trim().length === 0 || message.trim().length === 0){
                    toast.error('Forma nije ispunjena!', properties);
                    return;
                }
                await endpoints.sendContactMessage(name, email, message);
                setName("");
                setEmail("");
                setMessage("");
                toast.success('Poruka poslata!', properties);
            }} className="submit-buttons">
                Posalji
            </Button>
            <ToastContainer />
        </Box>
    );
}

export default ContactForm;