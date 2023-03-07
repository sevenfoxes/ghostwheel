import { FC, ReactNode, useState } from 'react';
import styled from '@emotion/styled';

const Root: any = styled('div')(({ theme }: any) => {

  return {
    position: 'fixed',
    width: 300,
  }
});

interface ToastProps {
  children: ReactNode;
  duration?: number;
  start?: string;
}

export const Toast: FC<ToastProps> = ({ children, duration = 1000, start = 'bottom' }) => {
  const [showing, setShowing] = useState(false);

  return (
    <Root start={start}>
      {children}
    </Root>
  );
}
