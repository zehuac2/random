import { createComponent } from '@lit/react';
import React from 'react';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field.js';

const OutlinedTextField = createComponent({
  tagName: 'md-outlined-text-field',
  elementClass: MdOutlinedTextField,
  react: React,
  events: {
    onInput: 'input',
  },
});

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
    <OutlinedTextField
      className={className}
      style={{ width: '100%' }}
      label={label}
      type={type}
      value={String(value)}
      onInput={(event: Event) => {
        const target = event.target as HTMLInputElement;
        onChange?.(target.value);
      }}
    />
  );
}
