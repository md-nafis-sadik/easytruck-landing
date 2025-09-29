"use client";
import { faqData } from "@/service";
import { useRef } from "react";

function Faq() {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <section className="pt-20 pb-7xl">
      <div className="containerX">
        <div className="grid grid-cols-2 gap-12">
          <div className="w-full max-w-[36rem] flex flex-col gap-4 h-[34.125rem]">
            <div className="tag">{faqData.tag}</div>
            <h2 className="title">{faqData.title}</h2>
            <p className="flex-1 text-xl text-black-700">
              {faqData.description}
            </p>
            <p className="text-xl text-black-700">{faqData.contactBtnText}</p>
            <button
              type="button"
              className="btn bg-main-500 text-white font-bold px-6 py-3.5 max-w-max"
            >
              {faqData.contactBtnTitle}
            </button>
          </div>
          <div>
            <div className="flex flex-col gap-1">
              {faqData.faqs.map((item, index) => (
                <div className="p-6 bg-white-300 rounded-2xl" key={index}>
                  <div>
                    <div className="flex items-center justify-between gap-6 pb-2.5">
                      <p className="truncate text-lg text-black-800 font-bold">
                        {item?.question}
                      </p>
                      {item?.icon}
                    </div>
                    <div>
                      <p className="text-lg text-black-600 leading-[140%]">
                        {item?.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
