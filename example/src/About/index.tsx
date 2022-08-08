import { useRecoilValue } from "recoil";
import { aboutState } from "./aboutState"

export const About = () => {
  const {title} = useRecoilValue(aboutState);

  return <div>{title}</div>
}
