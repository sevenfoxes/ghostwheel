import { atomFamily, selectorFamily } from "recoil";

export interface Dimensions {
  x: number;
  y: number;
  height: number;
  width: number;
}

export const dimensionState = atomFamily({
  key: 'dimensionState',
  default: {} as Dimensions
})

export const dimensionSelector = selectorFamily({
  key: 'dimensionSelector',
  get: (k: string) => ({ get }): Dimensions => {
    const state = get(dimensionState(k))

    return {
      x: state.x,
      y: state.y,
      height: Math.ceil(state.height),
      width: Math.ceil(state.width)
    }
  },
  set: (k) => ({ set }, rect) => set(dimensionState(k), rect)
})
