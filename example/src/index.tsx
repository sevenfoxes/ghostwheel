import { ThemeProvider } from 'react-jss';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { theme } from "../ghostwheel";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { clients } from './Clients/clients';
import { Clients } from './Clients';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path={clients.path} element={<Clients />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </RecoilRoot>
);
