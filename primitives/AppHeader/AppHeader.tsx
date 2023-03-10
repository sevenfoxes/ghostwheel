import { FC } from 'react';
import {styled} from 'utils';
import { Logo } from 'primitives/Logo'
import { Container } from 'primitives/Container';

const Root: any = styled(Container)(({ theme }) => ({
  background: theme.colors.main,
  color: theme.colors.white,
  padding: theme.app.padding,
  '& svg': {
    color: theme.colors.mainText,
  },
  '& > div': {
    alignItems: 'center',
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    justifyItems: 'right',
    gap: theme.app.padding,
    maxWidth: theme.app.maxWidth
  }
}));

const Tools: any = styled('div')(({ theme }) => ({
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '1rem'
}));

export const AppHeader: FC<any> = ({ children }) => {

  return (
    <Root>
      <Logo theme={'dark'} />
      <Tools>
        {children}
      </Tools>
    </Root>
  );
}
