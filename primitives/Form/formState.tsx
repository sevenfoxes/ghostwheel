import { atomFamily, selectorFamily } from 'recoil';
import { AnyObjectSchema } from 'yup';

export interface FormOptions {
  submitting: boolean;
  touched: boolean;
  dirty: boolean;
  onSubmit: (data) => void;
  schema: AnyObjectSchema;
  errors: any;
  fields?: any;
}

export type FormUpdate = FormOptions & {
  fieldIndex: string;
  fieldValue: string;
}

export interface FieldUpdate {
  value: string;
  error: string;
  charCount: number;
  formIndex?: string;
}

/* field state */

// the string in the input
export const fieldState = atomFamily({
  key: 'fieldState',
  default: ''
});

// field error string
export const fieldErrorState = atomFamily({
  key: 'fieldErrorState',
  default: '',
});

// get/set all the values for the fields in an object by a formIndex
export const fieldSelector = selectorFamily({
  key: 'fieldSelector',
  get: (fieldIndex: string) => ({ get }) => {
    const value = get(fieldState(fieldIndex));
    const error = get(fieldErrorState(fieldIndex));

    return {
      value,
      charCount: 20,
      error
    } as Partial<FieldUpdate>;
  },
  set: (fieldIndex: string) => ({ set }, field: Partial<FieldUpdate>) => {
    const form = formOptionsState(field.formIndex);

    set(form, (p) => {
      const fields = {
        ...p.fields,
        [fieldIndex]: field.value
      };

      return ({
        ...p,
        fields,
        dirty: !!Object.values(fields).reduce((a, i) => `${a}${i}`, ''),
        touched: true
      });
    });

    set(fieldState(fieldIndex), field.value);
    set(fieldErrorState(fieldIndex), field.error);
  },
});


/* form state */

// an array of all the forms registered
export const formsState = atomFamily({
  key: 'formsState',
  default: [] as string[]
});

// form registration options
export const formOptionsState = atomFamily({
  key: 'formOptionsState',
  default: {
    dirty: false
  } as FormUpdate,
});

// array of all the fields on a given form
export const formFieldsState = atomFamily({
  key: 'formFieldsState',
  default: [] as string[]
});

// form isEditing
export const formEditState = atomFamily({
  key: 'formEditState',
  default: false
});

// form focusState
export const formFocusState = atomFamily({
  key: 'formFocusState',
  default: ''
});

// form touched
export const formTouchedState = atomFamily({
  key: 'formTouchedState',
  default: false
});

// form submitting
export const formSubmittingState = atomFamily({
  key: 'formSubmittingState',
  default: false
});


/* selectors */

// handle updates to form state
export const formSelector = selectorFamily({
  key: 'formSelector',
  get: (formIndex) => ({ get }) => {

    return ({
      ...get(formOptionsState(formIndex)),
      submitting: get(formSubmittingState(formIndex))
    }) as any;
  },
  set: (formIndex) => ({ set }, { errors, schema, onSubmit }: Partial<FormUpdate>) => {
    if (errors) {
      set(formOptionsState(formIndex), (p) => ({
        ...p,
        errors: errors.inner,
      }));
    }

    if (schema || onSubmit) {
      set(formOptionsState(formIndex), (p) => ({
        ...p,
        schema,
        fields: Object.keys(schema.fields).reduce((a, field) => ({ ...a, [field]: p.fields[field] || '' }), {}),
        onSubmit
      }));
    }

    !!errors && errors.inner.map(({ params, message }) => set(fieldErrorState(params.path), message));

  }
});
