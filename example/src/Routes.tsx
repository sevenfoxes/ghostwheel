import { routerState, routesSelector } from "../ghostwheel";
import { Route, Routes as DomRoutes } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"
import { Dashboard } from "./Dashboard"
import { dashboardState } from "./Dashboard/dashboardState";

export const Routes = () => {
  const [route, setRoute] = useRecoilState(dashboardState);

  return (
    <DomRoutes>
      <Route path={route.path} element={<Dashboard />} />
    </DomRoutes>
  )
}
