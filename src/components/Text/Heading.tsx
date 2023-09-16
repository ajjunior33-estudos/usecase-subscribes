import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode;
    color?: string;
    weight?: string;
    classname?: string;
  }
export const Heading2:FC<Props> = ({children, color = "text-dark-text-color", weight="font-bold"}: Props) => {
    return (
        <h2 className={`text-[40px] text-center leading-[50px] ${color} ${weight} w-full`}>
            {children}
        </h2>
    )
}