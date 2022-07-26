import { FormikValues } from "formik";
import { atomFamily } from "recoil";

export const formState = atomFamily({
  key: 'formState',
  default: { } as FormikValues
})
