import { FC, InputHTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { mdiTire as logoPath } from '@mdi/js';
import { useRecoilValue } from 'recoil';
import { appState, routesState } from 'src/appState';
import { themeOverrideSelector } from 'src/themeState';

const Root: any = styled('a')(({ theme, altTheme }: any) => {
  const themesState = useRecoilValue(themeOverrideSelector(altTheme));
  const { logo } = altTheme ? themesState : theme

  return {
    alignItems: 'center',
    gap: '.3rem',
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    textDecoration: 'none',
    color: logo.fill
  }
});

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  attributeName?: string;
  withTouched?: boolean;
  fullWidth?: boolean;
  name: string;
  label?: string;
  size?: string;
  sx?: Object;
  InputProps?: any;
  allowNegative?: boolean;
  required?: boolean;
  error?: boolean;
  helperText: ReactNode;
};

export const Input: FC<InputProps> = (p) => {
  const { error, required, name, ...props } = p

  return (
    <div>
      <label htmlFor={name} />
      <input id={name} {...props} />
    </div>
  );
}
