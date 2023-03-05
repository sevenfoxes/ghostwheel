import { FC } from 'react';
import styled from '@emotion/styled';
import { Logo } from 'primitives/Logo'

const Root: any = styled('div')(({theme}:any) => ({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: 'min-content 1fr',
  background: theme.colors.main,
  color: theme.colors.white,
  padding: theme.variables.defaultPadding,
  gap: theme.variables.defaultPadding
}));

export const Header: FC<any> = ({ children }) => {
  return (
    <Root>
      <Logo />
      <div>{children}</div>
    </Root>
  );
}
