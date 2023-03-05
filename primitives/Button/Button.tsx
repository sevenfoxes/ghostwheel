import styled from "@emotion/styled";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<any> & {}

const Root: any = styled('button')(({theme}:any) => ({
  textAlign: 'center',
  background: 'transparent',
  color: theme.colors.white,
  border: `2px solid ${theme.colors.white}`,
  borderRadius: 3,
  display: 'block',
  padding: '.5rem',
  "&:hover": {
    background: 'rgba(255,255,255,.2)',
    cursor: 'pointer'
  }
}));

export const Button: FC<ButtonProps> = (props) => {
  return (
    <Root {...props} />
  );
}
