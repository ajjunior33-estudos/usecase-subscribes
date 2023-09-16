import { FC } from "react";
import { Heading2 } from "../../components/Text/Heading";
import { Paragraph } from "../../components/Text/Paragraph";

import { SocialMedia } from "../../components/SocialMedia";

const Example03: FC = () => {
  return (
    <main className="w-[100vw] relative h-[100vh] bg-guy bg-cover bg-center">
      <div className="w-full h-full bg-filter">
        <section className="max-w-[1050px] p-[50px] h-full mx-auto flex items-center justify-center flex-col">
          <div className="max-w-[760px] mx-auto flex items-center justify-center flex-col gap-[30px]">
            <Heading2 color="text-white">Subscribe And Learn About Us</Heading2>
            <Paragraph color="text-white">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </Paragraph>

            <section className="flex w-full max-w-[600px]">
              <input
                type="email"
                className="bg-[#F9F9F9] border-[1px] py-[15px] px-[20px] w-full border-[#E6E6E6] rounded-tl-[5px] rounded-bl-[5px]"
                placeholder="Your Email"
              />
              <button className="px-[22.5px] py-[15px] mx-w-[117px] bg-primary-color text-white rounded-tr-[5px] rounded-br-[5px]">
                Subscribe
              </button>
            </section>
            <Heading2 color="text-white">Designing Better Experience</Heading2>
            <SocialMedia />
          </div>
        </section>
      </div>
    </main>
  );
};

export { Example03 };
