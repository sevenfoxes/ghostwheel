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
      height: state.height ? Math.ceil(state.height) : 0,
      width: state.width ? Math.ceil(state.width) : 0
    }
  },
  set: (k) => ({ set }, rect) => set(dimensionState(k), rect)
})
