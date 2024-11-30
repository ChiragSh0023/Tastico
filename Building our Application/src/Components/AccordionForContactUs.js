import { useState } from "react";
import downArrow from "../assets/img/down-arrow.png";
import upArrow from "../assets/img/up-arrow.png";

const AccordionForContactUs = ({ question, ans }) => {
  const [expandAccordion, setExpandAccordion] = useState(false);

  const toggleAccordion = () => {
    setExpandAccordion(!expandAccordion);
  };

  return (
    <div className="my-4 flex flex-col">
      <div
        className="flex justify-between text-[18px] font-metropolis text-[#3d4152] cursor-pointer hover:text-[#ff5200]"
        onClick={toggleAccordion}
      >
        <div className="">{question}</div>
        <div>
          <img src={expandAccordion ? upArrow : downArrow} className="w-3" />
        </div>
      </div>
      {expandAccordion && (
        <div className="text-[#93959f] mt-2 font-gilroy">{ans}</div>
      )}
    </div>
  );
};

export default AccordionForContactUs;
