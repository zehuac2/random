import MuiButton from '@mui/material/Button';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

type ButtonVariant = 'filled' | 'outlined';
type ButtonColor = 'primary' | 'secondary';

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  block?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MuiButtonProps['onClick'];
  className?: string;
  startIcon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'filled',
  color = 'primary',
  block = false,
  type = 'button',
  onClick,
  className,
  startIcon,
}: ButtonProps) {
  return (
    <MuiButton
      className={className}
      variant={variant === 'filled' ? 'contained' : 'outlined'}
      color={color}
      fullWidth={block}
      type={type}
      onClick={onClick}
      startIcon={startIcon}
    >
      {children}
    </MuiButton>
  );
}
