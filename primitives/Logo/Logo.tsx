import { FC } from 'react';
import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { mdiTire as logoPath } from '@mdi/js';
import { useRecoilValue } from 'recoil';
import { appState, routesState } from 'src/appState';

const Root: any = styled('a')(({theme}:any) => ({
  alignItems: 'center',
  gap: '.3rem',
  display: 'grid',
  gridTemplateColumns: 'min-content 1fr',
  textDecoration: 'none',
  color: theme.colors.white
}));

const StyledIcon: any = styled(Icon)(({theme}:any) => ({
  background: theme.colors.main,
  color: theme.colors.white,
}));

export const Logo: FC<any> = () => {
  const { name } = useRecoilValue(appState);
  const { home } = useRecoilValue(routesState);

  return (
    <Root href={home}>
      <StyledIcon path={logoPath} size={2} />
      {name}
    </Root>
  );
}
