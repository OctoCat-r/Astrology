import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { FAQ } from "@/constants";
const FAQs = () => {
  return (
    <div id="faq" className="hero min-h-screen pb-10 pt-10 lg:pt-0">
      <h2 className="mb-10 text-center text-3xl sm:text-4xl lg:text-5xl text-white">
        FAQ
      </h2>
      <div className="products container mx-auto">
        <Accordion type="single" collapsible className="w-full px-10">
          {FAQ.map((item, index) => (
            <AccordionItem value={item.value} key={item.value}>
              <AccordionTrigger className="text-white">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-white">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
