import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import { FC } from "react";
interface Props {
  color?:string
}
const SocialMedia: FC<Props> = ({color = "#FFF"}:Props) => {
  return (
    <div className="flex items-center gap-[34px]">
      <TwitterLogo weight="fill" size={30} color={color} />
      <FacebookLogo weight="fill" size={30} color={color} />
      <InstagramLogo weight="fill" size={30} color={color} />
      <LinkedinLogo weight="fill" size={30} color={color} />
    </div>
  );
};

export { SocialMedia };
