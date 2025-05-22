"use client";

import Image from "next/image";
import { useState } from "react";
import Hamburger from "@/components/Navbar/Hamburger";
import Links, { HomeLink } from "@/components/Navbar/Links";
import Link from "next/link";
import NavActionButton from "@/components/utility/GetTicketsButton"
import { useDict } from "@/locales/dict";

export default function Navbar({ home = true }) {
  const [close, setClose] = useState(false);
  const toggleClose = () => setClose(!close);
  const { dictionary, changeLocale, locale } = useDict();

  return (
    <nav className="backdrop-saturate-180 border-b-1 sticky top-0 z-50 flex h-[75px] w-screen border-white border-opacity-100 bg-black/30 backdrop-blur-xl lg:px-9">
      <div className="absolute left-0 top-0 z-50 flex h-[75px] w-[85vw] lg:w-11/12 flex-row items-center  px-6 justify-around">
        <span>
          <Link href="/">
            <Image
              src="/logos/logo.png"
              height={30}
              width={188}
              loading="eager"
              alt="TEDxLINTAC Youth logo"
            />
          </Link>
        </span>
        <ul className="hidden gap-12 lg:flex">
          {home ? <Links /> : <HomeLink />}
        </ul>
        <div className="lg:hidden">
          { locale == 'en' ? 
            <button onClick={() => changeLocale('es')}>ESPAÑOL</button> 
              :
            <button onClick={() => changeLocale('en')}>ENGLISH</button>
          }
        </div>
        <div className="lg:hidden" onClick={toggleClose}>
          <Hamburger close={close} />
        </div>
        <div className="hidden lg:flex lg:flex-row lg:items-center">
          <span className="mr-8">
            { locale == 'en' ? 
              <button onClick={() => changeLocale('es')}>ESPAÑOL</button> 
                :
              <button onClick={() => changeLocale('en')}>ENGLISH</button>
            }
          </span>
          <NavActionButton />
        </div>
      </div>
      {/* MOBILE NAV */}
      <div
        className={`sticky left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-12 bg-black duration-700 ease-in-out lg:hidden ${close ? "nav-close" : "nav-open"
          }`}
      >
        <ul className="flex flex-col gap-6 text-center">
          {home ? <Links setClose={setClose} /> : <HomeLink />}
        </ul>
        <NavActionButton />
      </div>
    </nav>
  );
}
