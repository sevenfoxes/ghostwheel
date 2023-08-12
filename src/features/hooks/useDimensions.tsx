import { MutableRefObject, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { Dimensions, dimensionSelector } from "./useDimensionState";

interface UseDimensions<T> {
  ref: MutableRefObject<T>;
  state: Dimensions;
}

export const useDimensions = <T extends HTMLElement>(stateKey: string): UseDimensions<T> => {
  const ref = useRef<T>(null)
  const [state, setState] = useRecoilState(dimensionSelector(stateKey));

  useEffect(() => {
    ref.current && setState(ref.current.getBoundingClientRect());
  }, [state.width, state.height])

  return { ref, state }
}
