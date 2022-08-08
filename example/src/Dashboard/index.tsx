import { Page } from '../../ghostwheel';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { dashboardState } from './dashboardState';

type DashboardProps = { };

export const Dashboard:FC<DashboardProps> = () => {
  const [{title}] = useRecoilState(dashboardState);

  return (
    <Page title={title}>
      {title}
    </Page>
  )
}
