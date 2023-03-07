import styled from "@emotion/styled";
import { FC, ReactNode, useState } from "react";
import { useRecoilValue } from "recoil";
import { themeOverrideSelector } from "src/themeState";

export type ToggleProps = {
  value?: boolean;
  offLabel?: ReactNode;
  onLabel?: ReactNode;
  theme?: string;
  variant?: string;
  onClick: (e) => void;
}

const Root: any = styled('label')(({theme}: any) => ({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: '1fr min-content 1fr',
  gap: 10,
  cursor: 'pointer',
  input: {
    visibility: 'hidden',
    position: 'absolute'
  }
}));

const Controls: FC<any> = styled('span')(({ theme, altTheme, variant, checked }: any) => {
  const themesState = useRecoilValue(themeOverrideSelector(altTheme));
  const { input, toggle } = altTheme ? themesState : theme

  const pTheme = input[variant];
  const d = toggle.size - (2 * pTheme.borderWidth + 2 * input.g)
  const borderRadius = `calc(${toggle.size / 2}px)`

  return {
    ...pTheme,
    borderStyle: 'solid',
    display: 'block',
    width: toggle.size * 2,
    height: toggle.size,
    position: 'relative',
    borderRadius,

    '&:after': {
      borderRadius,
      transition: 'all .2s',
      content: "''",
      display: 'block',
      position: 'absolute',
      width: d,
      height: d,
      background: 'white',
      left: checked ? `calc(100% - ${d}px - ${pTheme.borderWidth || 0}px)` : pTheme.borderWidth,
      top: input.g
    }
  }
})

export const Toggle: FC<ToggleProps> = (props) => {
  const { value = false, onLabel = 'on', offLabel = 'off', onClick, theme, variant = 'default' } = props;
  const [checked, setChecked] = useState(value);

  const handleClick = (e) => {
    onClick(e)
    setChecked(!checked);
  }

  return (
    <Root>
      {offLabel}
      <Controls altTheme={theme} variant={variant} checked={checked} />
      {onLabel}
      <input type={'checkbox'} checked={checked} onChange={handleClick} />
    </Root>
  );
}
