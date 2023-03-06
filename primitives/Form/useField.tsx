import { useContext, useEffect } from "react";
import { FormContext } from "./FormContext";
import { useRecoilCallback, useRecoilState, useResetRecoilState } from "recoil";
import { fieldErrorState, fieldSelector, fieldState, formFocusState } from "./formState";

export interface FieldRegistrationOptions {
  customLabel?: string;
  defaultValue?: string;
}

export const useField = (fieldIndex, options?: FieldRegistrationOptions) => {
  const formIndex = useContext(FormContext);

  // field state
  const [{ value, error, charCount }, setField] = useRecoilState(fieldSelector(fieldIndex));
  const clearError = useResetRecoilState(fieldErrorState(fieldIndex));
  const clearFocused = useResetRecoilState(formFocusState(formIndex));
  const clearField = useResetRecoilState(fieldState(fieldIndex));
  const [focused, setFocused] = useRecoilState(formFocusState(formIndex));

  // change handler
  const onChange = useRecoilCallback(() => async ({ target }) => {
    setField({
      formIndex,
      value: target.value
    });
  }, [formIndex]);

  const onBlur = useRecoilCallback(() => async ({ target }) => {
    setField({
      formIndex,
      value: target.value
    });
    clearError();
  }, [formIndex]);

  const onFocus = useRecoilCallback(() => async () => {
    setFocused(fieldIndex);
  }, [fieldIndex]);

  useEffect(() => {
    if (options?.defaultValue) {
      setField({ formIndex, value: options.defaultValue });
    }

    return () => {
      clearFocused();
      clearError();
      clearField();
    };
  }, [formIndex, options?.defaultValue, setField]);

  return {
    error,
    value,
    charCount,
    onChange,
    onBlur,
    onFocus,
    label: options?.customLabel || fieldIndex,
    name: fieldIndex,
    focused: fieldIndex === focused
  };
};
