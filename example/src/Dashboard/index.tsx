import * as React from 'react';

type DashboardProps = {
  children?: React.ReactChild | React.ReactChild[];
};

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return <div>{children}</div>
}
