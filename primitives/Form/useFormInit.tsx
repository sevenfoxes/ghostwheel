import { useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { formSelector } from "./formState";
import { useForm } from "./useForm";

export const useFormInit = (formIndex, onSubmit, schema) => {
  const [form, setForm] = useRecoilState(formSelector(formIndex));
  const resetform = useResetRecoilState(formSelector(formIndex));
  const { handleSubmit } = useForm(formIndex);

  useEffect(() => {
    setForm({ onSubmit, schema });
    return () => resetform();
  }, []);

  return {
    ...form,
    handleSubmit
  };
};
