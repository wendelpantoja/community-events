import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Control, Controller } from 'react-hook-form';
import { TypeEvent } from '../../pages/CreateEvent/validationZod';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { FormHelperText } from '@mui/material';

type SelectProps = {
    label: string;
    control: Control<TypeEvent>;
    name: "tipo_evento" | "tipo_categoria";
    idLabel: string;
    error?: string;
    arrayMenuItem: Array<string>;
} 

export function SelectComponent({ label, control, name, idLabel, error, arrayMenuItem }:SelectProps) {

  return (
    <FormControl fullWidth>
        <Controller 
            control={control}
            name={name}
            render={({field: { onChange, onBlur, value, ref }}) => (
                    <FormControl fullWidth>
                        <InputLabel id={idLabel}>{label}</InputLabel>
                        <Select
                            labelId={idLabel}
                            id={idLabel}
                            value={value}
                            label={label}
                            onBlur={onBlur}
                            onChange={onChange}
                            ref={ref}
                        >
                        {
                            arrayMenuItem.map((value, index) => (
                                <MenuItem key={index} value={value}>{value}</MenuItem>
                            ))
                        }
                        </Select>
                    </FormControl>
            )}
        />
        {error && <FormHelperText id="component-error-text">{error}</FormHelperText>}
    </FormControl>
  );
}