import { Box, Spacer } from "@kvib/react";
import { BrukerTable } from "./BrukerTable";


export const Admin = () => {


    return (
        <Box display="flex">
            <Spacer />
            <BrukerTable />
            <Spacer />
        </Box>
    );
};
