import { FC } from 'react';
import {styled} from 'utils';
import { Logo } from 'primitives/Logo'
import { Container } from 'primitives/Container';

const Root: any = styled(Container)(({ theme }) => ({
  background: theme.colors.main,
  color: theme.colors.white,
  '& svg': {
    color: theme.colors.mainText,
  },
  '& > div': {
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr min-content',
    justifyItems: 'right',
    gap: theme.app.padding,
    maxWidth: theme.app.maxWidth
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
