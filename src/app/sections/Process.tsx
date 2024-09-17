"use client";
import { useState } from "react";
import { ProcessPhoto } from "../components/ProcessPhoto";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const Process = () => {
  const [accordionValue, setAccordionValue] = useState("item-0");
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      header: "Analiza",
      subheader: "Poznajmy się",
      list: [
        "Pierwsze spotkanie w biurze lub online",
        "Szczegółowe omówienie sytuacji",
        "Policzenie zdolności kredytowej",
        "Wybór top banków/ofert",
      ],
    },
    {
      header: "Nieruchomość",
      subheader: "Cel kredytowania",
      list: [
        "Omówienie rodzaju nieruchomości",
        "Stan prawny i nr Księgi Wieczystej",
        "Cena, metraż, dokumenty",
        "Wycena/operat szacunkowy",
      ],
    },
    {
      header: "Oferta",
      subheader: "Proces kredytowy",
      list: [
        "Wybór ofert min. dwóch banków",
        "Składamy wnioski kredytowe",
        "Monitoruję cały proces od A-Z",
        "Decyzje kredytowe po 3-5 tygodniach",
      ],
    },
    {
      header: "Bank",
      subheader: "Finalizacja",
      list: [
        "Omówienie warunków umowy kredytowej",
        "Wybór banku",
        "Omówienie polis na życie",
        "Podpisanie umowy kredytowej w banku",
      ],
    },
  ];

  const renderCards = () => {
    return data.map((obj, index) => {
      return (
        <AccordionItem
          className={``}
          key={index}
          value={`item-${index}`}
          onClick={() => {
            setAccordionValue(`item-${index}`);
            setActiveIndex(index);
          }}
        >
          <AccordionTrigger className={`z-${index} group `}>
            {/* dekstop */}
            <div className="lg:flex pt-[1.25em] lg:pt-[3.75em] px-8 lg:px-0 items-center hidden mb-[1.25em]">
              <div className="w-[11.125em] hidden lg:block  ">
                <div className="relative w-[2em] h-[2em] rounded-full overflow-hidden ml-6 ">
                  <div
                    className={`border-[0.125em] border-black w-[2em] h-[2em] rounded-full flex justify-center items-center ${
                      accordionValue === `item-${index}`
                        ? " bg-black"
                        : " bg-transparent"
                    }`}
                  >
                    <div className="absolute bottom-[-2em] w-[2em] h-[2em] bg-black rounded-full flex justify-center items-center transition-all ease-in-out duration-500 transform group-hover:bottom-0" />
                    <div
                      className={`text-black text-menu font-menu absolute group-hover:text-white transition-all ease-in-out duration-250 ${
                        accordionValue === `item-${index}`
                          ? " text-white"
                          : " text-black"
                      } `}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-mh2 lg:text-h2">{obj.header}</div>
            </div>
            {/* mobile */}
            <div className="lg:hidden flex items-center justify-center my-10 px-8">
              <div className="relative w-8 h-8 rounded-full overflow-hidden mr-4 flex lg:hidden ">
                <div
                  className={`border-2 border-black w-8 h-8 rounded-full flex justify-center items-center ${
                    accordionValue === `item-${index}`
                      ? " bg-black"
                      : " bg-transparent"
                  }`}
                >
                  <div className="absolute bottom-[-32px] w-8 h-8 bg-black rounded-full flex justify-center items-center transition-all ease-in-out duration-500 transform group-hover:bottom-0" />
                  <div
                    className={`text-black text-menu font-menu absolute group-hover:text-white transition-all ease-in-out duration-250 ${
                      accordionValue === `item-${index}`
                        ? " text-white"
                        : " text-black"
                    } `}
                  >
                    {index + 1}
                  </div>
                </div>
              </div>

              <div className="text-mh2 lg:text-h2">{obj.header}</div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex">
            <div className="w-[11.125em] hidden lg:block " />
            <div className="text-mbody lg:text-body leading-140 text-slate flex flex-col gap-5  pb-10 px-8 lg:px-0 ">
              <div className="">{obj.subheader}</div>
              <ul className="list-disc list-inside pl-3">
                {obj.list.map((string, index) => (
                  <li key={index}>{string}</li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      );
    });
  };

  return (
    <div className="lg:grid grid-cols-1 lg:grid-cols-3  overflow-hidden lg:h-screen">
      <div className=" hidden lg:block relative">
        <ProcessPhoto activeIndex={activeIndex} />
      </div>
      <div className=" lg:col-span-2 lg:px-4 lg:pl-40 lg:pr-10  ">
        <h1 className="text-mh1 lg:text-h1 lg:mb-8 px-4 lg:px-0 mb-20 ">
          Proces kredytowy
        </h1>

        {/* mobile */}
        <div className="lg:hidden  ">
          <Accordion
            type="single"
            defaultValue={accordionValue}
            value={accordionValue}
          >
            {renderCards()}
          </Accordion>
        </div>

        {/* desktop */}
        <div className="hidden lg:block  ">
          <Accordion
            type="single"
            defaultValue={accordionValue}
            value={accordionValue}
          >
            {renderCards()}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
