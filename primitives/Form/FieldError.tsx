import { FC } from "react";
import { useField } from './useField';
import styled from '@emotion/styled';

interface FieldErrorProps {
  name: string;
}

const Root = styled('span')(() => ({
  gap: 4,
  alignItems: 'center',
  display: 'grid',
  fontSize: 12,
  gridTemplateColumns: 'min-content 1fr'
}));

const Text = styled('span')(({ theme }) => ({
  color: theme.palette.error.dark,
  fontSize: 12
}));

export const FieldError: FC<FieldErrorProps> = (props) => {
  const { name } = props;
  const { error } = useField(name);

  if (!error) return null;

  return (
    <Root>
      <Text>{error}</Text>
    </Root>
  );
};
