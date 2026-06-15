import Image from "next/image";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-purple">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-x-0 top-0 z-20 flex justify-center px-6 pt-[12vh] sm:px-8 sm:pt-[16vh] md:pt-[20vh]">
        <div className="flex w-full flex-col items-center gap-8 sm:gap-10 md:w-auto md:flex-row md:items-center md:gap-14">
          <div className="shrink-0">
            <Image
              src="/assets/logo.png"
              width={170}
              height={170}
              className="h-auto w-[120px] sm:w-[140px] md:w-[170px]"
              alt="Hack@Brown logo"
              priority
            />
          </div>
          <div className="flex w-full flex-col items-center text-center md:w-auto md:items-start md:text-left">
            <h1 className="mb-3 font-mono text-[2rem] font-bold leading-none text-yellow [text-shadow:0_6px_4px_rgba(0,0,0,0.25)] sm:mb-4 sm:text-[2.75rem] md:mb-5 md:text-[5.25rem] lg:text-[6rem]">
              HACK@BROWN
            </h1>
            <p className="font-mono text-xs font-bold leading-snug text-yellow [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-base md:text-[1.875rem] md:leading-none">
              COMING SOON! FEBRUARY 6-7, 2027
            </p>
            <p className="mt-4 font-sans text-sm leading-snug sm:mt-5 md:mt-7 md:text-base">
              <a
                href="https://forms.gle/LiqgXqdzEumGBmQQ9"
                target="_blank"
                className="text-yellow underline underline-offset-2"
              >
                Stay in touch
              </a>
              <span className="text-white"> when applications open!</span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-[32vh] min-h-[180px] sm:h-auto sm:min-h-0">
        <Image
          src="/assets/buildings.png"
          width={1920}
          height={600}
          className="h-full w-full object-cover object-bottom sm:h-auto sm:object-fill"
          alt=""
        />
      </div>

      <Footer />
    </main>
  );
}
