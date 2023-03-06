import { FC } from "react";
import { styled } from "utils";
import { useField } from "./useField";
import { FieldError } from "./FieldError";
import { Input } from "primitives/Input/Input";

export type FieldProps = {
  attributeName?: string;
  withTouched?: boolean;
  fullWidth?: boolean;
  name: string;
  label?: string;
  size?: string;
  sx?: Object;
  InputProps?: any;
  allowNegative?: boolean;
  disabled?: boolean;
  value?: any;
  required?: boolean;
};
const Root: any = styled('div')(({ sx }: any) => sx);

export const Field: FC<FieldProps> = (props) => {
  const {
    fullWidth = false,
    name,
    sx,
    size = 'medium',
    InputProps,
    required,
    disabled = false
  } = props;


  const { focused, error, charCount, value, label, onChange } =
    useField(name, { customLabel: props.label, defaultValue: props.value });
  const s = fullWidth ? { gridColumn: '-1 / 1' } : {};
  const formattedLabel = required ? `${label} required` : label;

  return (
    <Root sx={{ ...s, ...sx }}>
      <Input
        name={name}
        onChange={onChange}
        error={!!error}
        disabled={disabled}
        // InputLabelProps={{
        //   size: size === 'medium' ? 'normal' : 'small'
        // }}
        // InputProps={{
        //   ...InputProps,
        //   endAdornment: focused && !!charCount &&
        //     <InputAdornment position={'end'}>{`${value?.length || 0}/${charCount}`}</InputAdornment>,
        //   size
        // }}
        label={formattedLabel}
        value={value}
        fullWidth
        helperText={<FieldError name={name} />}
      />
    </Root>
  );
};
