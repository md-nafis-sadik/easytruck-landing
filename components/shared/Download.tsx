import { appdownloadData } from "@/service";
import Image from "next/image";

function Download() {
  return (
    <section className="bg-blue-900">
      <div className="w-full max-w-[120rem] mx-auto pl-5 md:pl-10 lg:pl-16 xl:pl-20 flex items-center justify-between">
        <div className="py-6">
          <p className="text-4xs text-yellow-300 font-bold leading-[130%]">
            {appdownloadData.subTitle}
          </p>
          <h2 className="title !text-white">{appdownloadData.title}</h2>
          <p className="text-lg font-medium text-white whitespace-pre-wrap mt-2">
            {appdownloadData.description}
          </p>
          <div className="flex gap-4 mt-6">
            <button
              type="button"
              className="btn w-full max-w-48 bg-main-500 text-white font-bold px-5 py-3.5 rounded-2xl"
            >
              {appdownloadData.driverAppBtnTitle}
            </button>
            <button
              type="button"
              className="btn w-full max-w-max bg-black text-white font-bold px-5 py-3.5 rounded-2xl"
            >
              {appdownloadData.retailerAppBtnTitle}
            </button>
          </div>
        </div>
        <Image src={appdownloadData.image} alt="app download data" />
      </div>
    </section>
  );
}

export default Download;
