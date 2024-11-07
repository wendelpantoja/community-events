import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Control, Controller } from 'react-hook-form';
import { TypeEvent } from '../../pages/CreateEvent/validationZod';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

type SelectProps = {
    label: string;
    control: Control<TypeEvent>;
    name: "tipo_evento" | "tipo_categoria";
    idLabel: string;
} 

export function SelectComponent({ label, control, name, idLabel }:SelectProps) {

  return (
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
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
        )}
    />
  );
}