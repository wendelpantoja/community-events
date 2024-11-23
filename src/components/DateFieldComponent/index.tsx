import { DateField } from "@mui/x-date-pickers/DateField"
import { Control, Controller } from "react-hook-form"
import { TypeEvent } from "../../pages/CreateEvent/validationZod";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { FormControl, FormHelperText } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { enGB } from 'date-fns/locale';



type DateFieldProps = {
    label: string;
    control: Control<TypeEvent>;
    name: "data_inicio" | "data_fim";
    error?: string;
}

export function DateFieldComponent({ label, control, name, error }: DateFieldProps) {

    return (
    <FormControl fullWidth>
        <Controller 
            control={control}
            name={name}
            render={({field: { onChange, onBlur, value, ref }}) => (
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
                    <DateField
                        label={label}
                        value={value ? value : null}
                        onBlur={onBlur}
                        ref={ref}
                        onChange={onChange}
                    />
                </LocalizationProvider>
            )}
        />
        {error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
    </FormControl>
    )
}