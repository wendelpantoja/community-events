import { Control, Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { FormControl, FormHelperText } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { enGB } from 'date-fns/locale';
import { TypeUpdateEvent } from "../../pages/FormUpdate/validationZod";
import { TypeEvent } from "../../pages/CreateEvent/validationZod";

type TimeFieldProps = {
    label: string;
    control: Control<TypeUpdateEvent | TypeEvent>;
    name: "hora_inicio" | "hora_fim";
    error?: string;
} 

export function TimeFieldComponent({ label, control, name, error }:TimeFieldProps) {

    return (
        <>
            <FormControl fullWidth>
                <Controller 
                control={control}
                name={name}
                render={({field: { onChange, onBlur, value, ref }}) => (
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
                            <TimeField
                                label={label}
                                value={value}
                                onBlur={onBlur}
                                ref={ref}
                                onChange={onChange}
                            />
                    </LocalizationProvider>
                )}
                />
            </FormControl>
            {error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
        </>
    )
}