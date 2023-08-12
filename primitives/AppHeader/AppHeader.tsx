import { FC } from 'react';
import styled from '@emotion/styled';
import { Logo } from 'primitives/Logo'
import { Container } from 'primitives/Container';
import { useDimensions } from 'src/hooks/useDimensions';

const Root: any = styled(Container)(({ theme }) => ({
  background: theme.colors.main,
  padding: theme.app.padding,
  color: theme.colors.white,
  '& svg': {
    color: theme.colors.mainText,
  },
  '& > div': {
    color: theme.colors.white,
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
  const { ref } = useDimensions('header')

  return (
    <div ref={ref}>
      <Root>
        <Logo theme={'dark'} />
        <Tools>
          {children}
        </Tools>
      </Root>
    </div>
  );
}
