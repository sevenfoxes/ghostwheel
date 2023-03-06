import { FormEvent, useEffect } from "react";
import { useRecoilCallback, useRecoilState, useResetRecoilState } from "recoil";
import { formSelector, formOptionsState } from "./formState";

export const useForm = (formIndex) => {
  const [form, setForm] = useRecoilState(formSelector(formIndex));
  const clearForm = useResetRecoilState(formOptionsState(formIndex));

  const handleSubmit = useRecoilCallback(({ snapshot }) =>
    async (e: FormEvent) => {
      e.preventDefault();
      setForm({ submitting: true });
      const { fields, onSubmit, schema } = await snapshot.getPromise(formSelector(formIndex));

      const valid = await schema
        .validate(fields, { abortEarly: false })
        .catch((errors) => setForm({ errors }));

      if (valid) {
        onSubmit(fields);
      }

    }, []);

  useEffect(() => {

    return () => {
      clearForm();
    };
  }, []);


  return {
    ...form,
    handleSubmit
  };
};
