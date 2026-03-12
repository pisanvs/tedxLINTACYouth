import Image from "next/image";
import logo from "../../public/logos/logo.png";
import ParallaxStars from "@/components/ParallaxStars";

export default function Home() {
  return (
    <main className="w-full select-none bg-black">
      <ParallaxStars>
        <section className="flex h-screen w-full flex-col items-center justify-center gap-8 px-6">
          <Image
            className="w-[180px] md:w-[220px]"
            src={logo}
            alt="TEDxLINTAC Youth logo"
          />
          <div className="flex flex-col items-center gap-4 text-center text-white">
            <p className="text-[60px]/[90%] font-extralight md:text-[85px]/[95%] lg:font-thin">
              NEWS <span className="text-red">COMING</span> SOON
            </p>
            <p className="text-lg font-light text-white/70 md:text-xl">
              Stay tuned for updates from TEDxLINTAC Youth 2025.
            </p>
          </div>
        </section>
      </ParallaxStars>
    </main>
  );
}
