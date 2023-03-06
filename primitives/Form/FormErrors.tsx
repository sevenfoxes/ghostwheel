import { FC } from "react";
import { styled } from "utils";
import { uniq } from "lodash/fp";
import { useForm } from "./useForm";

interface FormErrorProps {
  name: string;
}

const Root = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.palette.error.main}`,
  borderRadius: '1rem',
  color: theme.palette.error.dark,
  padding: '1rem',
}));

const List = styled('ul')(() => ({
  listStyleType: 'disc',
}));

const Text = styled('li')(() => ({
  fontSize: 13,
  gap: '1rem',
  marginLeft: '1.5rem'
}));

const Header = styled('div')(() => ({
  gap: '.5rem',
  display: 'flex'
}));

export const FormErrors: FC<FormErrorProps> = (props) => {
  const { name } = props;
  const { errors } = useForm(name);

  if (!errors?.length) return null;

  return (
    <Root>
      <List>
        {uniq(errors.map((error, i) => (
          <Text key={i}>
            {error.message}
          </Text>
        )))}
      </List>
    </Root>
  );
};
