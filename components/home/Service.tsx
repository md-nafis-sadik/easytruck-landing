import { serviceData } from "@/service";

function Service() {
  return (
    <section className="py-7xl">
      <div className="containerX">
        <div className="tag mx-auto">{serviceData.tag}</div>
        <h2 className="title text-center mt-6">{serviceData.title}</h2>
        <div className="grid grid-cols-3 gap-8 mt-14">
          {serviceData.services.map((item, index) => (
            <div
              className="border border-neutral-200 rounded-2xl min-h-[15.625rem] flex flex-col justify-between p-10"
              key={index}
            >
              <div className="w-5xl aspect-square rounded-lg bg-white-100 flex items-center justify-center">
                {item?.icon}
              </div>
              <p className="text-2xl font-bold text-black">{item?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
