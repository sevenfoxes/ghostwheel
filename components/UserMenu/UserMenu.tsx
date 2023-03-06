import { FC } from "react";
import { mdiAccountCircleOutline } from '@mdi/js';
import { IconButton } from "primitives/IconButton";

export const UserMenu: FC<{}> = () => {
  return <IconButton icon={mdiAccountCircleOutline} />;
}
