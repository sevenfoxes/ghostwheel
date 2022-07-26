import { useRecoilValue } from "recoil"
import { appState } from "../../appState"
import { AppBar, Container, Toolbar} from '@mui/material';

export const Header = () => {
  const app = useRecoilValue(appState);

  return (
    <AppBar position={'static'}>
      <Container>
        <Toolbar>
          {app.name}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
