import { isEmpty } from 'lodash/fp';
import { Formik, Form as FormikForm, FormikProps, FormikValues } from "formik";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Primitive } from "../Primitive";
import { formState } from "./formState";


type FormProps = FormikProps<FormikValues> & {
  id: string;
  onSubmit: () => void;
}

export const Form:Primitive<FormProps> = ({id, onSubmit, initialValues, children}) => {
  const [ values, setValues ] = useRecoilState(formState(id));

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  if (isEmpty(values)) {
    return null;
  }

  return (
    <Formik
      initialValues={values}
      onSubmit={onSubmit}
    >
      <FormikForm>
        {children}
      </FormikForm>
    </Formik>)
}
