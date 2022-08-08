import { omit } from 'lodash/fp';
import { useRecoilValue } from "recoil"
import { appState } from "../../appState"
import { AppBar, Box, Container, Toolbar} from '@mui/material';
import { routesState, useLocation } from "../Router";
import { FC } from "react";
import { Link } from './Link';
import styled from '@emotion/styled';

export interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  const app = useRecoilValue(appState);
  const routes = useRecoilValue(routesState);
  const location = useLocation()

  return (
    <AppBar position={'static'}>
      <Container>
        <Toolbar>
          <Link path={'/'} title={app.name} />
          {title ? `  - ${title}` : ''}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Object.values(
                omit([location.pathname.split('/').filter(p => p !== '')[0], 'dashboard'])(routes)
              ).map((page, i) => <Link key={i} {...page} />)
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
