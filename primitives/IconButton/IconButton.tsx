import { styled } from "utils";
import { Icon } from "primitives/Icon";
import { ButtonHTMLAttributes, FC } from "react";

export type ButtonProps = ButtonHTMLAttributes<any> & {
  icon: string;
}

const Root: any = styled('button')(({theme}) => ({
  ...theme.iconButton,
  background: 'transparent',
  display: 'block',
  border: 'none',
}));

export const IconButton: FC<ButtonProps> = (props) => {
  const { icon, ...p } = props;

  return (
    <Root {...p}>
      <Icon
        path={icon}
      />
    </Root>
  );
}
