import { Primitive } from "../Primitive";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

interface ButtonProps extends MuiButtonProps {

}

export const Button: Primitive<ButtonProps> = ({ ...props }) => {
  return <MuiButton { ...props } />;
}
