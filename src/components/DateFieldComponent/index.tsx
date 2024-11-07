import { DateField } from "@mui/x-date-pickers/DateField"
import { Control, Controller } from "react-hook-form"
import { TypeEvent } from "../../pages/CreateEvent/validationZod";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

type DateFieldProps = {
    label: string;
    control: Control<TypeEvent>;
    name: "data_inicio" | "data_fim";
}

export function DateFieldComponent({ label, control, name }: DateFieldProps) {

    return (
    <Controller 
        control={control}
        name={name}
        render={({field: { onChange, onBlur, value, ref }}) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
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
    )
}