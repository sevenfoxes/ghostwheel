import { routerState, Page } from "../../ghostwheel";
import { useEffect } from "react";
import { RecoilState, SetterOrUpdater, useRecoilValue, useSetRecoilState } from "recoil";

export const useAsRoute = (pageState: RecoilState<Page>): [Page, SetterOrUpdater<Page>] => {
  const page = useRecoilValue(pageState);
  const { path } = page;
  const registerRoute = useSetRecoilState(routerState(path));

  useEffect(() => {
    registerRoute(page);
  }, [path])

  return [page, registerRoute]
}
