import { userData } from "@/service";

function User() {
  return (
    <section className="py-7xl bg-blue-900">
      <div className="containerX">
        <div className="w-full max-w-[58.75rem] mx-auto text-center">
          <div className="tag mx-auto">{userData.tag}</div>
          <h2 className="title !text-yellow-300 mt-10">{userData.title}</h2>
          <p className="text-xl text-neutral-200 mt-6">
            {userData.description}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-12">
          {userData.services.map((item, index) =>
            item?.isImage ? (
              <div
                key={index}
                className="min-h-[280px] p-8 bg-white flex flex-col justify-end rounded-3xs gap-2.5 relative overflow-hidden text-white"
                style={{
                  backgroundImage: `url("${item.image ? item.image.src : ""}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="text-xl font-bold leading-[125%] relative z-20">
                  {item?.title}
                </p>
                {item?.contacts && (
                  <a
                    href={`tel:${item?.contacts[0]}`}
                    className="btn max-w-max gap-3 bg-main-500 pl-2 pr-12 py-2 font-inter rounded-2xl relative z-20"
                  >
                    {item.phoneIcon}
                    <p className="flex flex-col font-bold text-xl leading-[120%]">
                      <span>{item?.contacts[0]}</span>
                      <span>{item?.contacts[1]}</span>
                    </p>
                  </a>
                )}
              </div>
            ) : (
              <div
                key={index}
                className="min-h-[280px] p-8 bg-white flex flex-col justify-between rounded-3xs"
              >
                <div className="w-5xl aspect-square bg-main-50 flex items-center justify-center rounded-full">
                  {item?.icon}
                </div>
                <div>
                  <p className="text-2xl font-bold text-black-900 leading-[125%]">
                    {item?.title}
                  </p>
                  <p className="text-base text-black-700 leading-[162%]">
                    {item?.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default User;
