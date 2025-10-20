import { footerData, HOME_PAGE_ID } from "@/service";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-10 lg:py-16 xl:py-20">
      <div className="w-full max-w-[120rem] mx-auto px-5 md:px-10 lg:px-16 xl:px-20">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6 pb-6 md:pb-8">
          <div>
            <Link href={`#${HOME_PAGE_ID}`} aria-label="Go to Home">
              {footerData.logo}
            </Link>
            <p className="text-base md:text-lg lg:text-xl text-black-600 my-4 lg:my-6">
              {footerData.description}
            </p>
            <a
              href={`tel:${footerData.contacts[0]}`}
              className="btn max-w-max gap-3 bg-main-500 pl-2 pr-12 py-2 font-inter rounded-2xl text-white"
            >
              {footerData.phoneIcon}
              <p className="flex flex-col font-bold text-sm md:text-base xl:text-xl leading-[120%]">
                <span>{footerData.contacts[0]}</span>
                <span>{footerData.contacts[1]}</span>
              </p>
            </a>
          </div>
          <div>
            {/* <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black-800 mb-2 lg:mb-4">
              {footerData.addressTitle}
            </h2> */}
            <Image
              src={footerData.addressImage}
              alt="Footer address image"
              width={300}
              height={200}
              className="w-32 lg:w-40 h-auto"
            />
            <p className="text-base md:text-lg lg:text-xl text-black-600 whitespace-pre-wrap mt-4">
              {footerData.address}
            </p>
          </div>
          <ul className="flex flex-col gap-2 lg:gap-4 font-inter">
            {footerData.links.map((item, index) => (
              <li key={index}>
                <Link
                  className="block  text-base font-medium text-black-700"
                  href={`#${item?.link}`}
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-3">
            {footerData.socialLinks.map((item, index) => (
              <li key={index}>
                <Link
                  className="w-8 h-8 md:w-11 md:h-11 flex items-center justify-center bg-black-800 rounded-full hover:bg-main-500 duration-200"
                  href={item?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item?.ariaLabel}
                >
                  {item?.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 md:pt-8 border-t border-black/10 font-inter">
          <p className="text-sm text-black-700">
            {footerData.copyrightTexts[0]}
            <span className="font-bold">{footerData.copyrightTexts[1]}</span>
            {footerData.copyrightTexts[2]}
          </p>
          <ul className="flex gap-4">
            <li>
              <Link
                className="text-sm text-black-700"
                href={`#${footerData.privacyPolicyLink}`}
              >
                {footerData?.privacyPolicyText}
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-black-700"
                href={`#${footerData.helpCenterLink}`}
              >
                {footerData?.helpCenterText}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
