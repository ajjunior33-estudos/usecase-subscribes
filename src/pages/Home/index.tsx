import { CreditCard } from "phosphor-react";
import { FC } from "react";
import { Heading2 } from "../../components/Text/Heading";
import { Paragraph } from "../../components/Text/Paragraph";

const Home: FC = () => {
  return (
    <main className="w-[100vw] h-[100vh]">
      <section className="max-w-[1050px] p-[50px] h-full mx-auto flex items-center justify-center flex-col gap-[30px]">
        <div className="max-w-[600px] mx-auto flex items-center justify-center flex-col gap-[30px]">
          <div className="p-[20px] rounded-full bg-danger-color">
            <CreditCard size={32} weight="bold" color="#FFF" />
          </div>
          <Heading2>Designing Better Experience</Heading2>

          <Paragraph>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </Paragraph>

          <section className="flex w-full max-w-[600px]">
            <input
              type="email"
              className="bg-[#F9F9F9] border-[1px] py-[15px] px-[20px] w-full border-[#E6E6E6] rounded-tr-[5px] rounded-bl-[5px]"
              placeholder="Your Email"
            />
            <button className="px-[22.5px] py-[15px] mx-w-[117px] bg-primary-color text-white rounded-tr-[5px] rounded-br-[5px]">
              Subscribe
            </button>
          </section>
          <Paragraph weight="font-bold">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </Paragraph>
        </div>
      </section>
    </main>
  );
};
export { Home };
