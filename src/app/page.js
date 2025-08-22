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
        <div className="flex flex-col items-center justify-center py-12 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">Watch Our Stream</h2>
          <div className="w-full max-w-4xl aspect-video">
            <iframe 
              className="w-full h-full rounded-lg shadow-2xl" 
              src="https://www.youtube.com/embed/_33SEC2rIII?si=1H5mekh1qvI9ombs" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="lg:hidden justify-center mx-auto w-full scale-150 flex">
          <NavActionButton className="z-50 absolute" />
        </div>
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
        <Sponsors />
        <br />
        {/*<Performer />*/}
        {/*<Tickets />*/}
        <AboutUs />
        {/*<Highlights />*/}
        <br />
        <br />
        <MeetUs />
        <br />
        <br />
        <Footer />
     </ParallaxStars>
   </main>
  );
}
