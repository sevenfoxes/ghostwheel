import styled from "@emotion/styled";
import { FC } from "react";

export interface GridProps {
  children: any;
  className?: string;
  columns?: string;
  as?: any;
  gap?: string;
  rows?: string;
  sx?: any;
}

const Root = styled('div')(({ columns, rows, gap, sx }: any) => ({
  display: 'grid',
  gap,
  gridTemplateColumns: columns,
  gridTemplateRows: rows,
  ...sx
}));

export const Grid: FC<GridProps> = (props) => {
  const {
    className,
    children,
    sx,
    ...r
  } = props;

  return (
    <Root {...r} className={className} sx={sx}>
      {children}
    </Root>
  )
}
