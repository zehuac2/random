import MuiTextField from '@mui/material/TextField';

export interface TextFieldProps {
  label?: string;
  value?: string | number;
  type?: 'text' | 'number';
  className?: string;
  onChange?: (value: string) => void;
}

export function TextField({
  label = 'Label',
  value = '',
  type = 'text',
  className,
  onChange,
}: TextFieldProps) {
  return (
    <MuiTextField
      className={className}
      fullWidth
      label={label}
      type={type}
      value={value}
      variant="outlined"
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
}
