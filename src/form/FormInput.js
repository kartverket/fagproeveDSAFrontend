import React from 'react'
import {FormLabel, FormHelperText, Input, FormControl} from "@kvib/react";

export const FormInput = ({label, isRequired, register, children, iType, iMax, iMin}) => {

    return(
        <FormControl isRequired={isRequired ? true: undefined}>
            <FormLabel >
                {label}
            </FormLabel>
            <Input
                {...register}
                type={iType}
                placeholder="Skriv her..."
                size="md"
                variant="outline"
                max={iMax}
                min={iMin}
            />
            <FormHelperText align={"left"} color="gray">
                {children}
            </FormHelperText>
        </FormControl>
    )
}
