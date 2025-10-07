import { ReactNode } from "react";

// header

interface IHeaderData {
  logo: ReactNode;
  appDownloadBtnTitle: string;
  appDownloadBtnLink: string;
  appDownloadBtnIcon: ReactNode;
}

// banner

interface IBannerService {
  icon: ReactNode;
  title: string;
  description: string;
}

interface IBannerData {
  id?: string;
  titles: string[];
  description: string;
  contacts: string[];
  demoTitle: string;
  demoLink: string;
  services: IBannerService[];
  banner: string;
  bannerBg: string;
  phoneIcon: ReactNode;
  playIcon: ReactNode;
}

// comanies

interface ICompanyData {
  id?: string;
  title: string;
  companies: string[];
}

// about

interface IAboutWhyEasyCount {
  count: string;
  title: string;
}

interface IAboutData {
  id?: string;
  tag: string;
  description: string;
  whyEasy: {
    title: string;
    counts: IAboutWhyEasyCount[];
    services: string[];
    buttonText: string;
    buttonLink: string;
  };
  icon: ReactNode;
  image: string;
  bannerTitle: string;
}

// user

interface IUserService {
  icon?: ReactNode;
  title: string;
  description?: string;
  image?: string;
  isImage?: boolean;
  contacts?: string[];
  phoneIcon?: ReactNode;
}

interface IUserData {
  id?: string;
  tag: string;
  title: string;
  description: string;
  services: IUserService[];
}

// service

interface IServiceService {
  icon: ReactNode;
  title: string;
}

interface IServiceData {
  id?: string;
  tag: string;
  title: string;
  services: IServiceService[];
}

// goal

interface IGoalData {
  id?: string;
  tag: string;
  title: string;
  image: string;
  goal: {
    title: string;
    description: string;
    driverAppBtnTitle: string;
    driverAppBtnLink: string;
    retailerAppBtnTitle: string;
    retailerAppBtnLink: string;
  };
  purpose: {
    title: string;
    services: string[];
  };
}

// faq

interface IFaqQuestion {
  id: string;
  question: string;
  answer: string;
  // icon: ReactNode;
}

interface IFaqData {
  id?: string;
  tag: string;
  title: string;
  description: string;
  contactBtnText: string;
  contactBtnTitle: string;
  contactBtnLink?: string;
  faqs: IFaqQuestion[];
}

// download app

interface IDownloadAppData {
  id?: string;
  title: string;
  subTitle: string;
  description: string;
  driverAppBtnTitle: string;
  driverAppBtnLink: string;
  retailerAppBtnTitle: string;
  retailerAppBtnLink: string;
  image: string;
}

interface IFooterData {
  logo: ReactNode;
  description: string;
  contacts: string[];
  addressTitle: string;
  address: string;
  links: {
    title: string;
    link: string;
  }[];
  socialLinks: {
    icon: ReactNode;
    link: string;
    ariaLabel?: string;
  }[];
  phoneIcon: ReactNode;
  copyrightTexts: string[];
  privacyPolicyText: string;
  privacyPolicyLink: string;
  helpCenterText: string;
  helpCenterLink: string;
}

export type {
  IAboutData,
  IAboutWhyEasyCount,
  IBannerData,
  IBannerService,
  ICompanyData,
  IDownloadAppData,
  IFaqData,
  IFaqQuestion,
  IFooterData,
  IGoalData,
  IHeaderData,
  IServiceData,
  IServiceService,
  IUserData,
  IUserService,
};
