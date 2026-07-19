import MuiTypography from '@mui/material/Typography';
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import type { ReactNode } from 'react';

const variantMap: Record<string, MuiTypographyProps['variant']> = {
  headline6: 'h6',
  body1: 'body1',
};

export interface TypographyProps {
  variant?: keyof typeof variantMap | string;
  children?: ReactNode;
  className?: string;
  'aria-label'?: string;
}

export function Typography({
  variant = 'body1',
  children,
  className,
  'aria-label': ariaLabel,
}: TypographyProps) {
  const mappedVariant =
    variantMap[variant] ?? (variant as MuiTypographyProps['variant']);

  return (
    <MuiTypography
      className={className}
      variant={mappedVariant}
      aria-label={ariaLabel}
    >
      {children}
    </MuiTypography>
  );
}
