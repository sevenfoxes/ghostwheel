import { FC } from 'react';
import styled from '@emotion/styled';
import { Logo } from 'primitives/Logo'

export interface TextFieldProps {

}

const Root: any = styled('input')(({theme}:any) => ({
}));

export const TextField: FC<TextFieldProps> = () => {
  return (
    <Root>
    </Root>
  );
}
