import { Primitive } from "../Primitive";
import { Route as RRoute} from "react-router-dom";
import { useRecoilState } from "recoil";
import { RouterState, routerState } from "./routerState";
import { useEffect } from "react";

type RouteProps = RouterState & {

}

export const Route: Primitive<RouteProps> = ({ path, title, children }) => {
  const [ route, setRoute ] = useRecoilState(routerState(path));

  useEffect(() => {
    setRoute({
      path,
      title
    })
  }, [path])

  return <RRoute path={route.path} element={children} />
}
