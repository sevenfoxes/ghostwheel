import { FC, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "utils";

interface LinkProps {
  children: ReactNode;
  to: any;
}

const Root: FC<Partial<LinkProps>> = styled(RouterLink)(({ theme }) => ({
  color: theme.colors.mainText,
  textDecoration: 'none'
}))

export const Link: FC<LinkProps> = (props) => {
  const { children, to } = props;

  return (
    <Root to={to}>{children}</Root>
  );
};
