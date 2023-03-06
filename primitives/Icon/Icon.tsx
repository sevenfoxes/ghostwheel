import { FC } from "react";
import MdiIcon from '@mdi/react';
import { useRecoilValue } from "recoil";
import { themeSelector } from "src/themeState";

interface IconProps {
  path: string;
  size?: number;
}

export const Icon:FC<IconProps> = (props) => {
  const { size = '24px' } = props;
  const { icon } = useRecoilValue(themeSelector);
  return <MdiIcon {...props} size={icon?.size || size} />
}
