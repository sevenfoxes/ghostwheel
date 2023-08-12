import { FC } from 'react';
import styled from '@emotion/styled';
import Icon from '@mdi/react';
import { mdiTire as logoPath } from '@mdi/js';
import { useRecoilValue } from 'recoil';
import { appState, routesState } from 'src/appState';
import { themeOverrideSelector } from 'src/themeState';
import { Link } from 'react-router-dom';

const Root: any = styled(Link)(({ theme, altTheme }: any) => {
  const themesState = useRecoilValue(themeOverrideSelector(altTheme));
  const { logo } = altTheme ? themesState : theme

  return {
    alignItems: 'center',
    gap: '.3rem',
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    textDecoration: 'none',
    color: '#fff'
  }
});

export const Logo: FC<any> = ({theme}) => {
  const { name } = useRecoilValue(appState);
  const { home } = useRecoilValue(routesState);

  return (
    <Root to={home}>
      <Icon path={logoPath} size={2} />
      {name}
    </Root>
  );
}
