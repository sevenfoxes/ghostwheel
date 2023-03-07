import { Page } from "primitives/Page"
import { FC, ReactNode } from "react";
import { styled } from "utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Root = styled('div')(({ theme }) => {
  return {
    '& > div': {
      padding: theme.app.padding,
      maxWidth: theme.app.maxWidth,
      margin: '0 auto'
    }
  }
});

export const Container: FC<ContainerProps> = (props) => {
  const { children } = props;
  return (
    <Root {...props}>
      <div>
        {children}
      </div>
    </Root>
  )
}
