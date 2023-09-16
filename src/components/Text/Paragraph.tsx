import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string;
  weight?: string
}

export const Paragraph: FC<Props> = ({ children, weight = 'font-normal', color = 'text-second-text-color' }: Props) => {
  return <p className={`text-[15px] text-center ${color} ${weight}`}>{children}</p>;
};
