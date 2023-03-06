import { FC } from 'react';
import {styled} from 'utils';
import { Logo } from 'primitives/Logo'

const Root: any = styled('div')(({theme}) => ({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: 'min-content 1fr min-content',
  justifyItems: 'right',
  background: theme.colors.main,
  color: theme.colors.white,
  padding: theme.app.padding,
  gap: theme.app.padding,
  '& svg': {
    color: theme.colors.mainText,
  }
}));

export const AppHeader: FC<any> = ({ children }) => {

  return (
    <Root>
      <Logo theme={'dark'} />
      {children}
    </Root>
  );
}
