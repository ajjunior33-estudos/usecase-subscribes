import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string;
  weight?: string;
  classname?: string;
}

export const Paragraph: FC<Props> = ({ children, weight = 'font-normal', classname, color = 'text-second-text-color' }: Props) => {
  return <p className={`text-[15px] text-center ${color} ${weight} ${classname}`}>{children}</p>;
};
