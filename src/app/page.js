"use client";

import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Speakers from "@/components/Speakers";
import Highlights from "@/components/Highlights";
import MeetUs from "@/components/MeetUs";
import Footer from "@/components/Footer";
import AboutTheme from "@/components/AboutTheme";
import AboutUs from "@/components/AboutUs";
import Tickets from "@/components/Tickets";
import Performer from "@/components/Performer";
import ParallaxStars from "@/components/ParallaxStars";
import NavActionButton from "@/components/utility/GetTicketsButton";
import Sponsors from "@/components/Sponsors/Sponsors";

export default function Home() {
  return (
    <main>
      <ParallaxStars>
        <Navbar />
        <LandingPage />
        <div className="lg:hidden justify-center mx-auto w-full scale-150 flex">
          <NavActionButton className="z-50 absolute" />
        </div>
        <br />
        <br />
        <br />
        <AboutTheme />
        <div className="flex justify-center mx-auto w-full scale-150">
          <NavActionButton className="z-50 absolute" />
        </div>
        <br />
        <Speakers />
        <br />
        {/*<Performer />*/}
        {/*<Tickets />*/}
        <AboutUs />
        {/*<Highlights />*/}
        <br />
        <Sponsors />
        <br />
        <MeetUs />
        <br />
        <br />
        <Footer />
     </ParallaxStars>
   </main>
  );
}
