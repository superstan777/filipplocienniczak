"use client";

import { Card } from "../components/Card";

export const WhatIDo = () => {
  const data = [
    {
      header: "Kredyty hipoteczne",
      subheader: "Zakup, budowa, refinansowanie, pożyczka hipoteczna.",
    },
    {
      header: "Pożyczki gotówkowe lub konsolidacyjne",
      subheader:
        "Najlepsze rozwiązanie kredytowe dopasowane do Twojej sytuacji.",
    },
    {
      header: "Polisy na życie i zdrowie",
      subheader: "Podstawowa forma zabezpieczenia przy kredycie hipotecznym",
    },
  ];

  const renderCards = () => {
    return data.map((obj, index) => {
      let border = false;
      if (index === 1) {
        border = true;
      }

      return (
        <Card
          key={index}
          number={index + 1}
          header={obj.header}
          subheader={obj.subheader}
          border={border}
        />
      );
    });
  };

  return (
    <div
      className="flex flex-col justify-between px-0 lg:px-[2.5em]"
      id="whatIDo"
    >
      <div>
        <div
          className="text-slate 

        
        
        mb-4 px-4 lg:px-0"
        >
          CO ROBIĘ
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-y-6 px-4 lg:px-0">
          <div className="lg:pr-10">
            <h1 className="text-mh1 lg:text-h1 p-0">
              {/* <h1 className="text-mh1 xl:text-xl 2xl:text-5xl p-0"> */}
              Zarządzam procesem kredytowym od A do Z
            </h1>
          </div>

          <div className="text-mh2 lg:text-h2 lg:pl-10">
            Policzę zdolność kredytową, zweryfikuję prawnie kupowaną
            nieruchomość, powiem jak się przygotować oraz jakie dokumenty
            uszykować, przedstawię kilka najlepszych ofert i doradzę dla Ciebie
            najkorzystniejszą.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mt-[107px] px-4 lg:px-0">
        {renderCards()}
      </div>
    </div>
  );
};
