"use client";

import { Review } from "../components/Review";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "../components/ui/carousel";

export const Reviews = () => {
  const reviewsData = [
    {
      name: "Mateusz Żyła",
      avatar: "",
      ago: "3 tygodnie temu",
      review:
        "Z Panem Filipem uzyskaliśmy kredyt 2% po długim i zaciętym boju z bankiem pekao s.a. Na początku września 2023 złożyliśmy za pośrednictwem Pana Filipa wniosek o kredyt 2% do banku Pekao S.A. oraz PKO BP. Przez parę miesięcy nic się w temacie nie działo, uzyskaliśmy pozytywna decyzję finansową o czym zostaliśmy przez Filipa poinformowani. Że względu na to że nieruchomość została oddana do użytku dopiero na koniec grudnia (oraz przez naciski banków by procesować wniosek tylko w jednym banku) musieliśmy zrezygnować z procesowania wniosku w PKO BP. I tutaj zaczęło się piekło - pracownik banku Pekao źle wprowadził nasz wniosek do systemu (na szczęście Pan Filip miał kopie tego co zostało złożone). Bank przez cały styczeń i luty mydlił oczy że będą w stanie to naprawić. W międzyczasie wygasła nam decyzja finansową. Filip pomógł nam napisać reklamację oraz doradził by udać się do prawnika (którego zorganizował). Ostatecznie we własnym zakresie znaleźliśmy innego prawnika oraz wciągnęliśmy do gry rzecznika  finansowego. Ostatecznie  po wielu miesiącach walki przy wsparciu Filipa, prawnika oraz rzecznika finansowego otrzymalismy kredyt 2%.",
    },
    {
      name: "Klaudia Małaczyńska",
      avatar: "",
      ago: "miesiąc temu",
      review: `Trafiliśmy do Filipa z polecenia i jeśli zajdzie taka potrzeba, na pewno wrócimy.
      Filip przeprowadził nas przez cały proces kredytu i pomagał na każdej możliwej płaszczyźnie. Jasno, szybko (na tyle ile banki pozwalają :) ) i bardzo klarownie.
      Serdecznie polecamy !`,
    },
    {
      name: "Patryk Śródecki",
      avatar: "",
      ago: "miesiąc temu",
      review:
        "Pełen profesjonalizm i stu procentowe zaangażowanie Pana Filipa - jest to gwarancja zadowolenia. Pan Filip dał się poznać jako osoba o wysokiej kulturze osobistej i dużej wiedzy. Gorąco polecam !",
    },
    {
      name: "Daria Weryńska",
      avatar: "",
      ago: "2 miesiące temu",
      review:
        "Szczerze polecam współpracę! Przez cały proces uzyskiwania kredytu hipotecznego czułam się prowadzona rzetelnie i kompleksowo, a jednak z uśmiechem :) Filip służył wsparciem, poradą i odpowiedziami nawet o dziwnych porach. Ma duże doświadczenie i poczucie humoru 🙂…",
    },
    {
      name: "Da wid",
      avatar: "",
      ago: "4 miesiące temu",
      review:
        "Ekspresowo pomógł nam wybrać najlepszą ofertę kredytową i uzyskać finansowanie. Pełen profesjonalizm i terminowość, wszystkie wnioski obsłużone bardzo szybko. Problemy po stronie banku itp praktycznie Ciebie nie obchodzą, Filip czuwa nad wszystkim.",
    },
    {
      name: "Magda S",
      avatar: "",
      ago: "4 miesiące temu",
      review:
        "Do Pana Filipa trafiliśmy z polecenia i był to strzał w 10-tkę. Pomaga i wspiera w każdym etapie procesu kredytowego. Odpowiada zawsze na każde pytanie. Cechuje się ogromnym profesjonalizmem, przy tym jest też bardzo sympatycznym człowiekiem. Jeśli ktoś - tak jak ja z moim mężem - w temacie kredytów jest totalnym laikiem, pan Filip zaopiekuje się nim w 100%. Serdecznie polecam :)",
    },
    {
      name: "Marcin Arndt",
      avatar: "",
      ago: "5 miesięcy temu",
      review:
        "Pan Filip to w pełni profesjonalny oraz posiadający ogromną wiedzę na temat kredytów doradca. Dużym plusem naszej współpracy było to, że Pan Filip zajął się praktycznie wszystkim, bez mojego zbytniego zaangażowania. Polecam i dziękuję!",
    },

    {
      name: "Patrycja Latecka",
      avatar: "",
      ago: "6 miesięcy temu",
      review:
        "Polecamy z mężem Pana Filipa z całego serca! Świetny doradca kredytowy, pomaga i wspiera na każdym kroku. Jest zawsze przygotowany, konkretny i zaangażowany. Same plusy! Dziękujemy raz jeszcze za przejście z nami przez cały proces, nie moglibyśmy sobie wyobrazić lepszego eksperta ☺️ będziemy polecali każdemu!",
    },
  ];

  const reviewsRef = useRef(null!);
  const [api, setApi] = useState<CarouselApi>();
  const [wasScrolled, setWasScrolled] = useState(false);

  const isVisible = useIntersectionObserver(reviewsRef);

  if (isVisible && !wasScrolled) {
    api?.scrollNext();
    setWasScrolled(true);
  }

  //
  // pages/api/reviews.js

  //

  const renderReviews = () => {
    return reviewsData.map((item, index) => {
      return (
        <CarouselItem
          className="basis-1/1 lg:basis-1/2 xl:basis-1/3  lg:pl-[1.25em] "
          key={index}
        >
          <Review name={item.name} ago={item.ago} review={item.review} />
        </CarouselItem>
      );
    });
  };

  return (
    <div className="w-full cursor-grab select-none " ref={reviewsRef}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          dragFree: true,
        }}
      >
        <CarouselContent className="lg:ml-[1em]">
          {renderReviews()}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
