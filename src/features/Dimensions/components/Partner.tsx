import styled, { StyledComponent } from "@emotion/styled";
import { FC, useState } from "react";
import cowboy from "../../../images/cowboy.png";
import { useDimensions } from "src/hooks/useDimensions";

interface PartnerProps {
  partnerKey: number;
  partnerPartnerKey: number;
  children?: any;
  facing?: string;
}

const Root: FC<any> = styled('div')(() => ({
  position: 'relative',
  background: 'transparent'
}));

const Bubble: FC<any> = styled('div')(({ y, facing }) => ({
  position: 'absolute',
  left: '50%',
  top: y,
  background: 'white',
  border: '1px solid #333',
  borderRadius: 20,
  padding: '1rem',
  zIndex: 99,
  transform: facing === 'left' ? `translateX(-100%) translateY(-100px)` : `translateX(50%) translateY(-100px)`
}));

const Cowboy: FC<Partial<PartnerProps>> = styled('div')(({ facing }: any) => {
  const [r, setR] = useState(Math.random());
  const { state } = useDimensions('header')
  return {
    background: `url(${cowboy})`,
    backgroundSize: 'contain',
    backgroundRepeat: "no-repeat",
    height: 400 * r * 3,
    width: 400 * r * 2,
    maxWidth: '50vw',
    maxHeight: `calc(100vh - ${state.height}px)`,
    position: 'absolute',
    backgroundPosition: 'bottom left',
    bottom: 0,
    left: `50%`,
    transform: facing === 'left' ? 'translateX(-50%) scaleX(-1)' : 'translateX(-50%)'
  }
});

export const Partner: FC<PartnerProps> = (props) => {
  const { partnerKey, facing, partnerPartnerKey } = props;
  const { ref, state } = useDimensions(`partner-${partnerKey}`)
  const partner = useDimensions(`partner-${partnerPartnerKey}`)
  return (
    <>
      <Root partnerKey={partnerKey}>
        <Cowboy facing={facing} ref={ref}>
        </Cowboy>
        <Bubble x={state.x} y={state.y} facing={facing} >
          howdy pardner!
          <p>I'm {state.height / 100}ft. tall and {state.width / 100}ft. around!</p>
          <p>He's {partner.state.height / 100}ft. tall and {partner.state.width}ft. around!</p>
        </Bubble>
      </Root>
    </>
  )
}
