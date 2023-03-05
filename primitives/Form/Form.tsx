import styled from "@emotion/styled";
import { FC, FormHTMLAttributes } from "react";

export type FormProps = FormHTMLAttributes<any> & {}

const Root: any = styled('form')(({theme}:any) => ({

}));

export const Form: FC<FormProps> = (props) => {
  return (
    <Root {...props} />
  );
}
