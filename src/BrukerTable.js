import {useToast, Box, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr, Card, Td} from "@kvib/react";
import { useState, useEffect } from "react";

export const BrukerTable = () => {
    const [brukerene, setBrukerene] = useState([]);
    const toast = useToast()

    useEffect(() => {
        console.log("Fetching data from API...");
        fetch("http://localhost:8080/api")
            .then(response => {
                console.log("Response status:", response.status);
                if (!response.ok) {
                    toast({
                        title: "HTTP error!",
                        description: "status: " + response.status,
                    })
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Data received:", data);
                setBrukerene(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                toast({
                    title: "HTTP error!",
                    description: error,
                    status: "error"
                })
            });
    }, []);

    const BrukerInfo = ({ brukere }) => {
        return (
            <Box align="center">
                {brukere.map((bruker, index) => (
                    <Card variant="elevated" p="1rem" w="90%" m="1rem">
                        <TableContainer>
                            <Table variant="striped" colorScheme="green" size="sm">
                                <TableCaption>Info om {bruker.fornavn} {bruker.etternavn} sin registreringsforespørsel til DSA</TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Felt</Th>
                                        <Th>Verdi</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Fornavn</Td>
                                        <Td>{bruker.fornavn}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Etternavn</Td>
                                        <Td>{bruker.etternavn}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Fødselsnummer</Td>
                                        <Td>{bruker.foedselsnummer}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>År med tilgang</Td>
                                        <Td>{bruker.aar}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Epostadresse</Td>
                                        <Td>{bruker.email}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Card>

                ))}
            </Box>
        );
    }
    return (
        <Box w="60%" my="7vh">
            <BrukerInfo brukere={brukerene}/>
        </Box>
    )
}
