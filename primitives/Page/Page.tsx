import {styled} from "utils";
import { FC, ReactNode } from "react";
import { Grid, GridProps } from "primitives/Grid";
import { useDimensions } from "src/hooks/useDimensions";

const Root: any = styled(Grid)(({ height }) => ({ height }));

export const Page: FC<GridProps> = (props) => {
  const { state } = useDimensions('header')
  return (
    <Root {...props} height={`calc(100vh - ${state.height}px)`} />
  );
}
