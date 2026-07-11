import type { ReactNode } from 'react';

const variantClass: Record<string, string> = {
  headline6: 'md-typescale-title-large',
  body1: 'md-typescale-body-large',
};

export interface TypographyProps {
  variant?: keyof typeof variantClass | string;
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
  const typeClass = variantClass[variant] ?? `md-typescale-${variant}`;
  const classes = [typeClass, className].filter(Boolean).join(' ');

  return (
    <span className={classes} aria-label={ariaLabel}>
      {children}
    </span>
  );
}
