import { bannerData } from "@/service";
import Image from "next/image";

function Hero() {
  return (
    <div
      className="bg-blue-900 -mt-[5.375rem] pt-[10.375rem] relative"
      id={bannerData.id}
    >
      <div className="containerX relative z-40 text-white">
        <div className="flex items-start justify-between gap-6">
          <div className="w-full max-w-[38.75rem]">
            <h1 className="text-7xl font-bold leading-[115%] tracking-[-0.046rem]">
              {bannerData.titles[0]}{" "}
              <span className="text-yellow-300">{bannerData.titles[1]}</span>
            </h1>
            <div className="flex -space-x-3 mt-8">
              <div className="w-14 aspect-square rounded-full bg-main-500"></div>
              <div className="w-14 aspect-square rounded-full bg-white"></div>
            </div>
          </div>
          <div className="w-full max-w-[26.25rem]">
            <p className="text-2xl">{bannerData.description}</p>
            <div className="flex gap-3 mt-12">
              <a
                href={`tel:${bannerData.contacts[0]}`}
                className="btn gap-3 bg-main-600 pl-2 pr-12 py-2 font-inter rounded-2xl"
              >
                {bannerData.phoneIcon}
                <p className="flex flex-col font-bold text-xl leading-[120%]">
                  <span>{bannerData.contacts[0]}</span>
                  <span>{bannerData.contacts[1]}</span>
                </p>
              </a>
              <button
                type="button"
                className="btn border border-white rounded-2xl py-4 pl-4 pr-5"
              >
                {bannerData.playIcon}
                <span>{bannerData.demoTitle}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 h-[35.625rem] w-full relative p-8 flex items-end justify-end">
          <Image
            src={bannerData.banner}
            alt="banner"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-2xl"
          />
          <div className="flex flex-col gap-8 py-8 px-10 bg-main-600 relative w-full max-w-[22.5rem] rounded-2xl">
            {bannerData.services.map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-[3.75rem] aspect-square flex items-center justify-center bg-white rounded-full shrink-0">
                  {service.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold leading-[130%]">
                    {service.title}
                  </p>
                  <p className="text-xl font-medium text-main-100 leading-[130%] mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={bannerData.bannerBg}
        alt="banner bg"
        className="absolute top-0 left-0 w-full h-full object-cover bg-top"
        priority
      />
    </div>
  );
}

export default Hero;
