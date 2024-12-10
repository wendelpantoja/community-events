import { DateField } from "@mui/x-date-pickers/DateField"
import { Control, Controller } from "react-hook-form"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { FormControl, FormHelperText } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { enGB } from 'date-fns/locale';
import { TypeUpdateEvent } from "../../pages/FormUpdate/validationZod";
import { TypeEvent } from "../../pages/CreateEvent/validationZod";



type DateFieldProps = {
    label: string;
    control: Control<TypeUpdateEvent> | Control<TypeEvent>;
    name: "data_inicio" | "data_fim";
    error?: string;
}

export function DateFieldComponent({ label, control, name, error }: DateFieldProps) {

    return (
        <>
            <FormControl fullWidth>
                <Controller 
                    control={control}
                    name={name}
                    render={({field: { onChange, onBlur, value, ref }}) => (
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
                            <DateField
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