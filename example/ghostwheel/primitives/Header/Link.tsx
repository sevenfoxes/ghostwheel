import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import { FC } from "react";

export interface LinkProps {
  path: string;
  title: string;
}

const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-transform: capitalize;
  color: white;
  margin-right: .4rem;
  &:hover {
    text-decoration: underline;
  }
`
export const Link: FC<LinkProps> = ({ path, title }) => {

  return (
    <StyledLink to={path}>
      {title}
    </StyledLink>
  )
}
