import {Box, Card, Spacer} from "@kvib/react";
import { Form } from "./form/Form";
import { DatepickerStep } from "./form/Datepicker";
import { DatepickerKvib } from "./form/DatepickerKvib.tsx";

export const Main = () => {
    return (
        <Box display="flex">
            <Spacer/>
            <Card w="50%" bg="#fcfcfc" p="5%" my="5vh">
                <Form/>
                <DatepickerStep/>
                <DatepickerKvib/>
            </Card>
            <Spacer/>
        </Box>
    )
}