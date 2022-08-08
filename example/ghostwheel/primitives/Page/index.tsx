import { Header } from "../Header";
import { FC } from "react";

export interface PageProps {
  title: string;
}

export const Page: FC<PageProps> = ({ children, title }) => {
  return (
    <div>
      <Header title={title} />
      { children }
    </div>
  )
}
