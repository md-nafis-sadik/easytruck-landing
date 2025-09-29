import { companyData } from "@/service";
import Image from "next/image";

function Company() {
  return (
    <div className="py-24">
      <div className="containerX">
        <h2 className="text-4xs text-black-800 text-center">
          {companyData.title}
        </h2>
        <div className="flex items-center justify-center gap-10 mt-5">
          {companyData.companies.map((company, index) => (
            <Image
              src={company}
              alt="company image"
              key={index}
              objectFit="contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company;
