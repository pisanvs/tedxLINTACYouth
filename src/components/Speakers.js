"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import cardsScrollLogic from "@/components/SpeakerCards/cardsScrollLogic";
import {
  hrScrollIntoView,
  SplitText,
  scrollNext,
  scrollPrevious,
  LeftArrow,
  RightArrow,
} from "./SpeakerCards/Support";
import { Speaker_data } from "@/data/SpeakersData.js";
import "@/components/SpeakerCards/speakerStyles.css";
import cardBg from "../../public/backgrounds/TEDxLINTACBG.png";
import Heading from "@/components/utility/Heading";

export default function Speaker() {
  let currCardIndex = useRef(0);
  const leftScroll = useRef(null),
    cardsScrollElm = useRef(null),
    cardsParentElm = useRef(null),
    lastScrollTime = useRef(null),
    scrollCoolDownTime = 400, //in ms
    parentHasMouseOver = useRef(false);

  useEffect(() => {
    let timer = null,
      cardContElm = cardsScrollElm.current;

    function doScrollEvent() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cardsScrollLogic(cardContElm, currCardIndex, leftScroll);
      }, 100);
    }

    //Detect scroll for the card container;
    cardContElm.addEventListener("scroll", doScrollEvent);
    //Do the necessary changes on first load;
    doScrollEvent();

    //Code for keyboard navigation, works when user has mouse over on the cards element.
    cardsParentElm.current.addEventListener("mouseover", () => {
      parentHasMouseOver.current = true;
    });
    cardsParentElm.current.addEventListener("mouseleave", () => {
      parentHasMouseOver.current = false;
    });

    // window.onkeydown = (e) => {
    //   if (!parentHasMouseOver.current) {
    //     return false;
    //   }
    //   switch (e.key) {
    //     case "ArrowLeft":
    //       scrollPrevious(
    //         cardsScrollElm,
    //         currCardIndex,
    //         lastScrollTime,
    //         scrollCoolDownTime,
    //         Speaker_data
    //       );
    //       break;
    //     case "ArrowRight":
    //     case " ":
    //       scrollNext(
    //         cardsScrollElm,
    //         currCardIndex,
    //         lastScrollTime,
    //         scrollCoolDownTime,
    //         Speaker_data
    //       );
    //       break;
    //   }
    // };
  }, []);

  return (
    <section
      className="my-8 w-full overflow-x-hidden px-20 pl-[150px] pr-0 pt-[80px] max-md:p-10 max-sm:p-0 lg:pr-0 text-lg"
      id="speakers"
    >
      <Heading>Speakers</Heading>
      {/* Speaker cards start here */}
      <div
        className="flex h-[600px] w-full flex-[0_0_auto] max-md:h-[auto] max-md:flex-col-reverse"
        ref={cardsParentElm}
      >
        {/* Name and description container */}
        <div className="relative h-[100%] w-[35%] max-lg:w-[40%] max-md:mt-10 max-md:h-[600px] max-md:w-[100%] max-sm:mt-6 max-sm:h-[600px] max-sm:px-5">
          {/* This element prevents scrolling */}
          <div className="absolute z-20 h-full w-full"></div>
          <div
            className="scroll-snap-y scroll-snap-start hide-scrollbar details-container flex h-full w-full flex-col overflow-hidden "
            ref={leftScroll}
          >
            {Speaker_data.map((speaker, index) => {
              return (
                <div
                  key={index + 50}
                  className="flex min-h-full max-w-[100%] flex-grow flex-col justify-center max-md:justify-start"
                >
                  <h2 className="font-poppins flex flex-col text-5xl font-extrabold uppercase leading-[100%] max-sm:text-4xl max-sm:font-medium">
                    <SplitText text={speaker.name} />
                  </h2>
                  <br />
                  <div className="flex items-center opacity-80">
                    <p className="font-poppins font-light leading-[137.5%] max-sm:leading-[130%]">
                      {speaker.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*Image and navigation components*/}
        <div className="flex max-h-full w-[65%] flex-col justify-end gap-10 pl-5 max-lg:w-[60%] max-md:w-[100%] max-md:pl-0 max-sm:gap-6">
          {/*Image card container*/}
          <div
            className="scroll-snap-x scroll-snap-start hide-scrollbar last-scroll-padd flex w-full items-end overflow-y-hidden overflow-x-scroll"
            ref={cardsScrollElm}
          >
            {Speaker_data.map((speaker, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    hrScrollIntoView(
                      cardsScrollElm.current,
                      cardsScrollElm.current.children[index]
                    );
                  }}
                  className="cards-container relative flex aspect-[0.8] w-[400px] flex-[0_0_auto] select-none items-end justify-center overflow-visible p-5 max-sm:w-[262px]"
                >
                  <div className="sub-card-cont relative flex h-full w-full origin-bottom justify-center">
                    <div className="card-bg-container absolute left-0 top-0 h-full w-full overflow-hidden rounded-[15px]">
                      <Image
                        src={cardBg}
                        width={300}
                        objectPosition={"75% 20%"}
                        className="h-full w-full object-cover object-center tran"
                        alt="Cards background"
                      />
                    </div>
                    {
                      speaker.image ?
                        <Image
                          src={speaker.image || null}
                          width={270}
                          height={500}
                          className="absolute bottom-0 min-w-[100%] select-none"
                          alt={speaker.name}
                          loading="eager"
                        /> :
                        <div className="hidden"></div>
                    }
                 </div>
                </div>
              );
            })}
          </div>
          {/* Navigation */}
          <div className="flex items-center gap-8 pl-[20px] ">
            <button
              onClick={() => {
                scrollPrevious(
                  cardsScrollElm,
                  currCardIndex,
                  lastScrollTime,
                  scrollCoolDownTime,
                  Speaker_data
                );
              }}
              aria-label="Scroll left button"

            >
              <LeftArrow />
            </button>
            <button
              onClick={() => {
                scrollNext(
                  cardsScrollElm,
                  currCardIndex,
                  lastScrollTime,
                  scrollCoolDownTime,
                  Speaker_data
                );
              }}
              aria-label="Scroll right button"
            >
              <RightArrow />
            </button>
            <span className="h-[0.5px] w-[60%] bg-white max-sm:w-[50%]"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
