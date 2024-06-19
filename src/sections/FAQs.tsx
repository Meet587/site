import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faq = [
  {
    question: "Why should I Invest through Investifyd?",
    answer:
      "Investifyd helps you invest your money online in financial products after thoroughly understanding your risk level and time frame. We also have SIP, lump sum, crorepati, and PPF calculators for you to better understand your financial goal. Not just that, you always have our expert support to keep a track of your goals. You can invest in any mutual fund scheme of your choice. can also invest thru our funds screener in the choice of your fund.",
  },
  {
    question: "Is Investifyd trustworthy?",
    answer:
      "Investifyd uses financial-grade security to ensure smoother transactions. We never touch your money. Your investment is done through your bank account and directly placed on our transaction partner, BSE which transfers the money to mutual fund companies. Your investment is confirmed by an SMS and email by the mutual fund company and by your investing partner Investifyd.",
  },
  {
    question: "Is Investifyd regulated?",
    answer:
      "Investifyd is regulated by SEBI and licensed by AMFI. We follow all the relevant norms by the regulators and strictly adhere to all the protocols and regulations.",
  },
  {
    question: "Is my data secured?",
    answer:
      "Yes, your data is secured with financial-grade security. We use AES-256 encryption for your data security. Further, we never ever intend or will sell your data to any advertisers or any third party, ever. Your data is totally safe with us.",
  },
];

const FAQs = () => {
  return (
    <>
      <section className="items-center justify-between p-4 sm:p-16 md:p-24">
        <h2 className="heading-2">FAQs</h2>
        <h4 className="text-lg text-center mt-8">
          Our support team ready to help you, please contact with them.
        </h4>
        <div className="md:w-[600px] mx-auto mt-12 ">
          <Accordion type="single" collapsible>
            {faq.map((el, i) => {
              return (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-lg text-left font-bold">
                    {el.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-[26px] text-left">
                    {el.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        <div className="mt-12 md:mt-20 items-center text-center justify-between">
          <h2 className="heading-2">Still have any questions for us?</h2>
          <h4 className="mt-4">
            Our support team is always available for you to resolve your
            queries.
          </h4>
          <p className="mt-2">
            <Link className="text-blue-500 underline" href={"#"}>
              Click here
            </Link>{" "}
            to contact us.
          </p>
        </div>
      </section>
    </>
  );
};

export default FAQs;
