import { Control, Controller } from "react-hook-form";
import { TypeEvent } from "../../pages/CreateEvent/validationZod";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeField } from '@mui/x-date-pickers/TimeField';

type TimeFieldProps = {
    label: string;
    control: Control<TypeEvent>;
    name: "hora_inicio" | "hora_fim";
} 

export function TimeFieldComponent({ label, control, name }:TimeFieldProps) {

    return (
        <Controller 
        control={control}
        name={name}
        render={({field: { onChange, onBlur, value, ref }}) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
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
    )
}