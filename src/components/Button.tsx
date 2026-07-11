import { createComponent } from '@lit/react';
import React from 'react';
import { MdFilledButton } from '@material/web/button/filled-button.js';
import { MdOutlinedButton } from '@material/web/button/outlined-button.js';

const FilledButton = createComponent({
  tagName: 'md-filled-button',
  elementClass: MdFilledButton,
  react: React,
});

const OutlinedButton = createComponent({
  tagName: 'md-outlined-button',
  elementClass: MdOutlinedButton,
  react: React,
});

type ButtonVariant = 'filled' | 'outlined';
type ButtonColor = 'primary' | 'secondary';

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  block?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
}

export function Button({
  children,
  variant = 'filled',
  color = 'primary',
  block = false,
  type = 'button',
  onClick,
  className,
}: ButtonProps) {
  const style: React.CSSProperties = {
    width: block ? '100%' : undefined,
    ...(color === 'secondary' && variant === 'filled'
      ? {
          '--md-filled-button-container-color': 'var(--md-sys-color-secondary)',
          '--md-filled-button-label-text-color':
            'var(--md-sys-color-on-secondary)',
        }
      : {}),
  };

  const Component = variant === 'outlined' ? OutlinedButton : FilledButton;

  return (
    <Component
      className={className}
      style={style}
      type={type}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
