import { aboutData, CheckCircleIcon } from "@/service";

function About() {
  return (
    <div className="py-7xl">
      <div className="containerX">
        <div className="flex justify-between gap-4">
          <div className="tag">{aboutData.tag}</div>
          <p className="w-full max-w-[59.0625rem] text-4xs leading-[130%] text-black-800">
            {aboutData.description}
          </p>
        </div>
        <div className="flex gap-6 mt-12">
          <div className="p-8 bg-yellow-300 w-full max-w-[27.5rem] rounded-3xs flex flex-col justify-between">
            <p className="text-2xl font-bold text-black-900">
              {aboutData.whyEasy.title}
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              {aboutData.whyEasy.counts.map((item, index) => (
                <div className="flex flex-col gap-2" key={index}>
                  <p className="text-5xl font-bold text-black-900 leading-[100%]">
                    {item?.count}
                  </p>
                  <p className="text-xl text-black-900/60 leading-[120%]">
                    {item?.title}
                  </p>
                </div>
              ))}
            </div>
            <ul className="flex flex-col gap-2.5 mt-8">
              {aboutData.whyEasy.services.map((item, index) => (
                <li
                  className="flex items-center gap-4 text-base text-black-700"
                  key={index}
                >
                  <CheckCircleIcon className="text-main-500" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn bg-black text-white text-base font-bold px-5 py-3.5 rounded-2xl mt-8"
            >
              {aboutData.whyEasy.buttonText}
            </button>
          </div>
          <div
            className="w-full relative flex items-end p-6"
            style={{
              backgroundImage: `url("${aboutData.image.src}")`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              borderRadius: "20px",
            }}
          >
            <div className="w-full max-w-[38.25rem] flex gap-3 px-10 py-8 bg-main-500 rounded-2xl text-white">
              <div className="w-5xl h-5xl aspect-square flex items-center justify-center bg-white rounded-full">
                {aboutData.icon}
              </div>
              <p className="text-3xs font-bold leading-[130%] -tracking-[0.0175rem] whitespace-pre-wrap">
                {aboutData.bannerTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
