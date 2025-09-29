import { CheckCircleIcon, goalData } from "@/service";
import Image from "next/image";

function Goal() {
  return (
    <section className="py-20">
      <div className="containerX">
        <div className="tag mx-auto">{goalData.tag}</div>
        <h2 className="title text-center mt-6">{goalData.title}</h2>
        <div className="grid grid-cols-3 gap-12 mt-12">
          <div>
            <p className="text-2xl text-black-900 font-semibold mb-6">
              {goalData.goal.title}
            </p>
            <p className="text-base text-black-700">
              {goalData.goal.description}
            </p>
            <button
              type="button"
              className="btn w-full max-w-48 bg-main-500 text-white font-bold px-5 py-3.5 mt-6 mb-4 rounded-2xl"
            >
              {goalData.goal.driverAppBtnTitle}
            </button>
            <button
              type="button"
              className="btn w-full max-w-max bg-black text-white font-bold px-5 py-3.5 rounded-2xl"
            >
              {goalData.goal.retailerAppBtnTitle}
            </button>
          </div>
          <Image
            src={goalData.image}
            alt="goal image"
            className="w-full rounded-3xs"
          />
          <div className="flex flex-col justify-end">
            <p className="text-2xl text-black-900 font-semibold mb-6">
              {goalData.purpose.title}
            </p>
            <ul className="flex flex-col gap-6">
              {goalData.purpose.services.map((item, index) => (
                <li
                  className="flex items-center gap-4 text-base text-black-700"
                  key={index}
                >
                  <CheckCircleIcon className="text-main-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goal;
