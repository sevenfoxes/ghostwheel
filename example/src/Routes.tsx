import { routerState } from "../ghostwheel";
import { Route, BrowserRouter, Routes as DomRoutes } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { Dashboard } from "./Dashboard"
import { dashboardState } from "./Dashboard/dashboardState";

export const Routes = () => {
  const route = useRecoilValue(dashboardState);

  return (
    <DomRoutes>
      <Route path={route.path} element={<Dashboard />} />
    </DomRoutes>
  )
}
