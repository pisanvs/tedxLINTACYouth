"use client";

import { useState } from "react";
import Container from "../utility/Container";
import { SponsorData } from "@/data/SponsorData";
import Heading from "../utility/Heading";
import EachSponsor from "./EachSponsor";
import SponsorPopup from "./SponsorPopup";

export default function Sponsors() {
  if (SponsorData.length === 0) return <></>;
  const [sponsorIndex, setSponsorIndex] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <Container>
      <section id="sponsors" className="mx-[4%]">
        <Heading>our sponsors</Heading>
        <div className="flex select-none flex-wrap items-center justify-center gap-x-16 gap-y-6 py-8 md:px-[5%]">
          {SponsorData.map((sponsor, index) => (
            <EachSponsor
              sponsor={sponsor}
              key={index}
              id={index}
              setSponsorIndex={setSponsorIndex}
              setPopupOpen={setPopupOpen}
            />
          ))}
        </div>
      </section>
      <SponsorPopup
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        sponsor={SponsorData[sponsorIndex]}
      />
    </Container>
  );
}
