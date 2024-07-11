import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
import QuestionMark from "../../assets/SVG/question-marks.svg";
import { FAQs } from "../data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Faqs() {
  const [selected, setSelected] = useState(null);

  const togglerFunction = (index) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <section className=" mt-[8rem] mx-auto  px-4 lg:px-16 flex w-[85%] justify-between gap-10">
      <div className=" p-3  text-[#263238]  text-[24px] flex flex-col justify-end  font-medium font-montserrat">
        Frequently Asked <br /> Questions (FAQs)
      </div>

      <div className="flex flex-col mt-10 gap-4">
        {FAQs.map((item, index) => (
          <div className="border border-[#495961] rounded-lg w-full lg:w-auto px-4">
            <div
              onClick={() => togglerFunction(index)}
              className="px-5 py-4 flex items-center justify-between cursor-pointer"
            >
              <div className="flex gap-4 text-[#263238]">
                <p className="text-[18px] font-bold text-[#263238]">?</p>
                <p className="flex-1 text-[#263238]">{item.title}</p>
              </div>

              {selected === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {selected === index && (
              <div className="mt-2">
                <ul className="list-disc pl-5 py-5 border-t border-[#495961]">
                  {item.content.map((contentItem, i) => (
                    <li
                      key={i}
                      className="text-[#474747] text-[14px] leading-8"
                    >
                      {contentItem}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
