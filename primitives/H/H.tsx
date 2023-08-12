import { FC, ReactNode } from "react";
import styled from '@emotion/styled';

interface HProps {
  component?: string;
  children: ReactNode;
  sx?: object;
}

const StyledH: FC<any> = styled('h1')(({ sx = {} }: any) => ({
  ...sx
}))

export const H: FC<HProps> = (props) => {
  const { sx, children, component = 'h1' } = props;

  return (
    <StyledH as={component} sx={sx}>
      {children}
    </StyledH>
  )
}
