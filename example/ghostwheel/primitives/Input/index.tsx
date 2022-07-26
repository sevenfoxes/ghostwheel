import { Primitive } from "../Primitive";
import {  } from "module";
import { TextField, TextFieldProps } from "@mui/material";

export const Input: Primitive<TextFieldProps> = ({variant = 'outlined', ...props}) => {

  return (<TextField
    {...props}
    variant={variant}

  />);
}
