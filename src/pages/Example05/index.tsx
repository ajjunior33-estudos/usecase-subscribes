import { FC } from "react";
import { Paragraph } from "../../components/Text/Paragraph";
import { Star } from "phosphor-react";
import { Heading2 } from "../../components/Text/Heading";

const Example05: FC = () => {
  return (
    <main className="w-[100vw] h-[100vh] bg-mulher bg-cover bg-center">
      <div className="w-full h-full bg-filter flex items-center justify-center">
        <section className="max-w-[1200px] p-[48px] bg-white grid grid-cols-2">
          <div className="px-[35px] py-[30px] flex flex-col gap-[20px]">
            <div className="flex items-center w-full justify-center">
              <Star weight="fill" size={22} className="text-secondary" />
              <Star weight="fill" size={22} className="text-secondary" />
              <Star weight="fill" size={22} className="text-secondary" />
              <Star weight="fill" size={22} className="text-secondary" />
              <Star weight="bold" size={22} className="text-secondary" />
            </div>
            <Paragraph weight="bold">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </Paragraph>

            <div className="flex items-center w-full justify-center">
              <img
                src="/User01.jpg"
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="flex items-start flex-col ml-[15px]">
                <Paragraph color="text-primary-color" weight="font-bold">
                  Regina Miles
                </Paragraph>
                <Paragraph weight="font-bold">Designer</Paragraph>
              </div>
            </div>
          </div>
          <div className="px-[35px] py-[30px] flex flex-col gap-[20px]">
            <Paragraph color="text-disabled-element-text-color">
              Problems trying to resolve the conflict{" "}
            </Paragraph>
            <Heading2>Subscribe For Latest Newsletter</Heading2>
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
            <Paragraph weight="font-bold">
              Problems trying to resolve the conflict{" "}
            </Paragraph>
          </div>
        </section>
      </div>
    </main>
  );
};
export { Example05 };
