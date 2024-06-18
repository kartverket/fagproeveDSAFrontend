import {Button, Box, Heading, Spacer, Stack, Select, FormLabel} from "@kvib/react";
import {useForm} from "react-hook-form";
import {FormInput} from "./FormInput";

export const Form = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        const jsonData = JSON.stringify(data)
        console.log(jsonData);
        console.log(data.fornavn);

        //lag kallet
        fetch('http://localhost:8443/api', {
            method: "POST",
            body: jsonData,
            headers: {
                "Content-type": "application/json"
            }
        })
    }

    return (
        <Box>
            <Heading as="h2" size="lg" pb="20px">Søknad om tilgang til DSA</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="3vh">
                    <FormInput register={register("fornavn")} iType="text" label="Fornavn" isRequired>
                        Skriv inn ditt fornavn
                    </FormInput>
                    <FormInput register={register("etternavn")} iType="text" label="Etternavn" isRequired>
                        Skriv inn ditt etternavn
                    </FormInput>
                    <FormInput register={register("foedselsnummer")} iType="number" label="Fødselsnummer" iPattern="\d{11}" isRequired>
                        Skriv inn ditt fødselsnummer
                    </FormInput>
                    <FormLabel>Velg hvor mange år du vil ha tilgang</FormLabel>
                    <Select
                    aria-label="select"
                    isRequired
                    {...register("aar")}>
                        <option value="1">1 år</option>
                        <option value="2">2 år</option>
                        <option value="3">3 år</option>
                        <option value="4">4 år</option>
                        <option value="5">5 år</option>
                    </Select>
                    <FormInput register={register("email")} iType="email" label="Email" isRequired>
                        Skriv inn din epostadresse
                    </FormInput>
                    <Box display="flex">
                        <Button type="submit">Submit</Button>
                        <Spacer/>
                        <Button type="reset" variant="secondary">Reset</Button>
                    </Box>
                </Stack>
            </form>
        </Box>

    )
}