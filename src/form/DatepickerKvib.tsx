import {Box, IconButton, Datepicker, Center} from "@kvib/react";
import {useState} from "react";

export const DatepickerKvib = () => {
    const today = new Date();
    const [valgtDato, setValgtDato] = useState(today)
    
    const onDate = (day: string) => {
        const newDay = new Date(day)
        console.log(newDay)
        setValgtDato(newDay)
    }
    const stepDate = (oldDate: Date, step: number, direction: String) => {
        let newDate = new Date(oldDate)
        
        if (direction === "foran") {
            newDate.setDate(newDate.getDate() + step)
        }
        
        if (direction === "bak") {
            newDate.setDate(newDate.getDate() - step)
        }
        setValgtDato(newDate)
        
    }

    return (
        <Center>
        <Box display="flex" mt="10px" w="25vw">
            <IconButton icon="chevron_left" onClick={() => stepDate(valgtDato, 1, "bak")} />
            <Datepicker
                mx="5px"
                onChange={(day)=>onDate(day.target.value)}
                defaultSelected={valgtDato}
            />
            <IconButton icon="chevron_right" onClick={() => stepDate(valgtDato, 1, "foran")} />
        </Box>
            <p>{valgtDato.toDateString()}</p>
        </Center>
    )
}
