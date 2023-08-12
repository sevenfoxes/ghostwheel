import { FC, ReactNode } from "react";
import styled from '@emotion/styled';

interface PProps {
  component?: string;
  children: ReactNode;
  sx?: object;
}

const StyledP: FC<any> = styled('p')(({ sx = {} }: any) => ({
  ...sx
}))

export const P: FC<PProps> = (props) => {
  const { sx, children, component = 'p' } = props;

  return (
    <StyledP as={component} sx={sx}>
      {children}
    </StyledP>
  )
}
