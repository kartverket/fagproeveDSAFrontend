import {Box, Card, Spacer} from "@kvib/react";
import { Form } from "./form/Form";

export const Main = () => {
    return (
        <Box display="flex">
            <Spacer/>
            <Card w="50%" bg="#fcfcfc" p="5%" my="5vh">
                <Form/>
            </Card>
            <Spacer/>
        </Box>
    )
}