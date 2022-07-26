import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { dashboardState } from './dashboardState';

type DashboardProps = {

};

export const Dashboard:FC<DashboardProps> = () => {
  const { title } = useRecoilValue(dashboardState);

  return (<div>
    {title}
  </div>)
}
