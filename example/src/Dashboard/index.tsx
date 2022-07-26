import { Route } from '../../ghostwheel';
import { FC } from 'react';
import { RouteProps } from 'react-router-dom';

type DashboardProps = RouteProps & {

};

export const Dashboard:FC<DashboardProps> = () => {
  return (<div>
    hello world
  </div>)
}
