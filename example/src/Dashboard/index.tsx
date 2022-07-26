import { appState, routerState, useAsRoute } from '../../ghostwheel';
import { FC, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dashboardState } from './dashboardState';

type DashboardProps = {

};

export const Dashboard:FC<DashboardProps> = () => {
  const [{title}] = useAsRoute(dashboardState)
  return (<div>
    {title}
  </div>)
}
