import type { FC, ReactNode } from "react";
import type { AnyObjectSchema } from "yup";
import { styled } from "utils";
import { FormContext } from "./FormContext";
import { FormErrors } from "./FormErrors";
import { useFormInit } from "./useFormInit";

export interface FormProps {
  children: ReactNode;
  name: string;
  className?: string;
  editing?: boolean;
  onSubmit: (data) => void;
  schema: AnyObjectSchema;
  sx?: object;
  id?: string;
}

const Root: any = styled('form')(({theme}:any) => ({

}));

export const Form: FC<FormProps> = (props) => {
  const { children, name, className, onSubmit, schema, sx } = props;
  const { handleSubmit } = useFormInit(name, onSubmit, schema);

  return (
    <FormContext.Provider value={'name'}>
      <Root sx={sx} className={className} id={name} test-id={name} onSubmit={handleSubmit}>
        <FormErrors name={name} />
        {children}
      </Root>
    </FormContext.Provider>
  );
}
