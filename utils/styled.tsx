import emotionStyled from "@emotion/styled";

export interface Styled {
  theme: Theme
}

export const styled = component => (fn: (v: Styled) => any) => emotionStyled(component)(fn)
