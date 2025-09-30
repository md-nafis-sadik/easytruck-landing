import {
  IAboutData,
  IBannerData,
  ICompanyData,
  IDownloadAppData,
  IFaqData,
  IFooterData,
  IGoalData,
  IHeaderData,
  IServiceData,
  IUserData,
} from "../config";
import { colors } from "./colors.assets";
import {
  ABOUT_PAGE_ID,
  COMPANY_PAGE_ID,
  CONTACT_PAGE_ID,
  DOWNLOAD_PAGE_ID,
  FAQ_PAGE_ID,
  GOAL_PAGE_ID,
  HELP_PAGE_ID,
  HOME_PAGE_ID,
  SERVICE_PAGE_ID,
  USER_PAGE_ID,
} from "./contant";
import { images } from "./images.assets";
import {
  AppDownloadIcon,
  BookMarkIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LogoIcon,
  PaymentIcon,
  PhoneIcon,
  PlayIcon,
  ShieldIcon,
  SupportIcon,
  TwitterIcon,
  UserIcon,
  WifiIcon,
} from "./svg.assets";

// header

export const headerData: IHeaderData = {
  logo: <LogoIcon className="w-28 md:w-36 lg:w-44 duration-200" />,
  appDownloadBtnTitle: "অ্যাপ ডাউনলোড করুন",
  appDownloadBtnLink: "",
  appDownloadBtnIcon: <AppDownloadIcon className="text-white" />,
};

// banner

export const bannerData: IBannerData = {
  id: HOME_PAGE_ID,
  banner: images.banner,
  bannerBg: images.bannerBg,
  titles: ["হাতের মুঠোয় ট্রাক ভাড়ার,", "স্মার্ট সমাধান"],
  description:
    "আমাদের আধুনিক টেকনোনোলজি আপনার ট্রাক বুকিং এবং ট্র্যাকিং করেছে সহজ, সাশ্রয়ী ও নিরাপদ",
  contacts: ["01712-898613", "01898-923559"],
  demoTitle: "ডেমো দেখুন",
  demoLink: "",
  services: [
    {
      icon: <BookMarkIcon className="w-5 md:w-6 lg:w-8 text-main-500" />,
      title: "ইজি ট্রাক বুকিং",
      description: "সহজ এবং সাশ্রয়ী",
    },
    {
      icon: <SupportIcon className="w-5 md:w-6 lg:w-8 text-main-500" />,
      title: "২৪/৭ সাপোর্ট",
      description: "আমাদের সাপোর্ট সেন্টার খোলা আছে সর্বোদা",
    },
  ],
  phoneIcon: <PhoneIcon className="w-6 md:w-8 lg:w-10 text-white" />,
  playIcon: <PlayIcon className="text-white" />,
};

// companies

export const companyData: ICompanyData = {
  id: COMPANY_PAGE_ID,
  title: "যে কোম্পানিদের সাথে আমরা কাজ করছি",
  companies: [
    images.bsrm,
    images.shahCement,
    images.lafarge,
    images.ispat,
    images.abrsm,
    images.premierCement,
  ],
};

// about

export const aboutData: IAboutData = {
  id: ABOUT_PAGE_ID,
  tag: "আমাদের সম্পর্কে",
  description:
    "ইজি ট্রাক এমন একটি সফটওয়ার যা আপনার ট্রাক ভাড়া নেওয়ার অভিজ্ঞতাকে করবে আরো সহজ ও নিরবিচ্ছিন্ন। আমাদের আধুনিক টেকনোলজি যেকোনো ব্যাবসার পণ্য পরিবহনের জন্য আদর্শ। চলুন দেখে আসা যাক কিভাবে কাজ করে ইজি ট্রাক।",
  whyEasy: {
    title: "কেন EasyTruck?",
    counts: [
      {
        title: "ড্রাইভার প্যানেল",
        count: "৫০০+",
      },
      {
        title: "কাস্টমার সাপোর্ট",
        count: "২৪/৭",
      },
    ],
    services: [
      "প্রতিদিন ট্রিপ বুকিংয়ের নিশ্চয়তা",
      "সঠিক ও প্রতিযোগিতামূলক ভাড়া",
      "লাইভ লোকেশন ট্র্যাকিং",
      "নিরাপদ ও ব্রোকারহীন ভাড়ার অভিজ্ঞতা",
    ],
    buttonText: "আরো জানুন",
    buttonLink: "",
  },
  icon: <WifiIcon className="w-6 sm:w-8 text-main-500" />,
  image: images.about,
  bannerTitle: "চলে আসুন ইজিট্রাকে এবং\nআয় বৃদ্ধি করুন।",
};

// users

export const userData: IUserData = {
  id: USER_PAGE_ID,
  tag: "ব্যবহারকারীগন",
  title: "সম্মানিত ব্যাবহারকারীগন",
  description:
    "ইজিট্রাক অ্যাপের মাধ্যমে ড্রাইভার, ট্রাক মালিক, রিটেইলার, কোম্পানি প্রতিনিধি ও ডিলারগণ ট্রাক বুকিং, সময়মতো ডেলিভারি, ইন অ্যাপ পেমেন্ট এবং রিপোর্টসহ সকল ধরনের সুবিধা পাবেন।",
  services: [
    {
      icon: <UserIcon className="w-6 md:w-8 text-main-500" />,
      title: "ড্রাইভার",
      description:
        "প্রতিদিন ট্রিপ নিশ্চিত, স্বচ্ছ সেবা চার্জ মডেল, সরাসরি ট্রিপ রিকোয়েস্ট ও পেমেন্ট।",
    },
    {
      icon: <UserIcon className="w-6 md:w-8 text-main-500" />,
      title: "ট্রাক মালিক",
      description:
        "প্রতিদিন নতুন ট্রিপের সুযোগ, ইন-অ্যাপ পেমেন্ট সুবিধা, ভাড়া নির্ধারণে স্বচ্ছতা এবং ঝামেলাহীনভাবে ব্যবসা করার নিশ্চয়তা।",
    },
    {
      icon: <UserIcon className="w-6 md:w-8 text-main-500" />,
      title: "রিটেইলার",
      description:
        "দ্রুত ট্রিপ বুকিং, সময়মতো ডেলিভারি, ডিজিটাল রিপোর্ট ও ইনভয়েস সুবিধার মাধ্যমে ব্যবসা পরিচালনা।",
    },
    {
      icon: <UserIcon className="w-6 md:w-8 text-main-500" />,
      title: "কোম্পানি অফিসার",
      description:
        "সহজে ট্রিপ বুকিং, ইনভয়েস ও রিপোর্ট ডাউনলোড, নির্ভরযোগ্য ও দ্রুত পরিবহন ব্যবস্থা।",
    },
    {
      icon: <UserIcon className="w-6 md:w-8 text-main-500" />,
      title: "ডিলার",
      description:
        "দ্রুত ট্রিপ বুকিং, সময়মতো ডেলিভারি, ডিজিটাল রিপোর্ট ও ইনভয়েস সুবিধার মাধ্যমে ব্যবসা পরিচালনা।",
    },
    {
      title: "নিবন্ধনের জন্য যোগাযোগ করুন",
      isImage: true,
      image: images.contact,
      contacts: ["01712-898613", "01898-923559"],
      phoneIcon: <PhoneIcon className="w-6 md:w-8 lg:w-10 text-white" />,
    },
  ],
};

// service

export const serviceData: IServiceData = {
  id: SERVICE_PAGE_ID,
  tag: "ব্যবহার করার কারন",
  title: "কেন আমাদের সার্ভিস ব্যাবহার করবেন?",
  services: [
    {
      icon: <BookMarkIcon className="w-6 md:w-8 text-main-500" />,
      title: "প্রতিদিন বুকিং নিশ্চয়তা",
    },
    {
      icon: <PaymentIcon className="w-6 md:w-8 text-main-500" />,
      title: "সঠিক ও উচ্চ ভাড়ার সম্ভবনা",
    },
    {
      icon: <ShieldIcon className="w-6 md:w-8 text-main-500" />,
      title: "নিরাপদ ও ব্রোকারহীন ভাড়ার অভিজ্ঞতা",
    },
  ],
};

// goal

export const goalData: IGoalData = {
  id: GOAL_PAGE_ID,
  tag: "লক্ষ্য ও উদ্দেশ্য",
  title: "আমাদের লক্ষ্য ও উদ্দেশ্য",
  goal: {
    title: "আমাদের লক্ষ্য",
    description:
      "ইন্ডাস্ট্রিয়াল পরিবহন খাতে স্বচ্ছতা, গতিশীলতা ও খরচ কমিয়ে আনাই আমাদের মুল লক্ষ্য। ইজি ট্রাক প্লাটফর্ম আপনার ইন্ডাস্ট্রিয়াল পণ্য পরিবহনকে নতুন এক মাত্রায় নিয়ে যাবে।",
    driverAppBtnTitle: "ড্রাইভার অ্যাপ",
    driverAppBtnLink: "",
    retailerAppBtnTitle: "রিটেইলার/কোম্পানি অফিসার অ্যাপ",
    retailerAppBtnLink: "",
  },
  image: images.goal,
  purpose: {
    title: "উদ্দেশ্য",
    services: [
      "দ্রুত ট্রিপ বুকিং",
      "রিপোর্ট তৈরি করা ও ডাউনলোড",
      "সার্বক্ষনিক ট্রাকের অবস্থান ট্র্যাক করা যায়",
      "নিরাপদ ট্রাক বুকিং এবং ইনস্যুরেন্স সুবিধা",
      "ডেডিকেটেড কাস্টমার সাপোর্ট এবং অফিসার",
    ],
  },
};

export const faqData: IFaqData = {
  id: FAQ_PAGE_ID,
  tag: "সাধারণ প্রশ্নোত্তর",
  title: "সাধারণ জিজ্ঞাসা (FAQ)",
  description:
    "ইজিট্রাকের সাথে আপনার যাত্রা সহজ ও সুন্দর হোক।এখানে আপনাদের জন্য সাধারণ কিছু প্রশ্ন এবং উত্তর দেয়া হলো।",
  contactBtnText: "আরো বিস্তারিত জানতে চান?",
  contactBtnTitle: "যোগাযোগ করুন",
  contactBtnLink: "",
  faqs: [
    {
      id: "1",
      question: "EasyTruck কী ধরনের সেবা দেয়?",
      answer:
        "EasyTruck একটি স্মার্ট প্ল্যাটফর্ম, যেখানে ড্রাইভার, ট্রাক মালিক, রিটেইলার এবং কোম্পানিগুলো সহজে ট্রিপ বুকিং, ট্র্যাকিং ও ডিজিটাল পেমেন্ট করতে পারে।",
    },
    {
      id: "2",
      question: "EasyTruck ব্যবহার করতে কি আলাদা চার্জ আছে?",
      answer:
        "EasyTruck একটি স্মার্ট প্ল্যাটফর্ম, যেখানে ড্রাইভার, ট্রাক মালিক, রিটেইলার এবং কোম্পানিগুলো সহজে ট্রিপ বুকিং, ট্র্যাকিং ও ডিজিটাল পেমেন্ট করতে পারে।",
    },
    {
      id: "3",
      question: "আমি কি ট্রাকের অবস্থান সরাসরি ট্র্যাক করতে পারবো?",
      answer:
        "EasyTruck একটি স্মার্ট প্ল্যাটফর্ম, যেখানে ড্রাইভার, ট্রাক মালিক, রিটেইলার এবং কোম্পানিগুলো সহজে ট্রিপ বুকিং, ট্র্যাকিং ও ডিজিটাল পেমেন্ট করতে পারে।",
    },
    {
      id: "4",
      question: "আমি কীভাবে নতুন ট্রিপ বুক করবো?",
      answer:
        "EasyTruck একটি স্মার্ট প্ল্যাটফর্ম, যেখানে ড্রাইভার, ট্রাক মালিক, রিটেইলার এবং কোম্পানিগুলো সহজে ট্রিপ বুকিং, ট্র্যাকিং ও ডিজিটাল পেমেন্ট করতে পারে।",
    },
    {
      id: "5",
      question: "ড্রাইভার ও কোম্পানির মধ্যে সরাসরি যোগাযোগ কি সম্ভব?",
      answer:
        "EasyTruck একটি স্মার্ট প্ল্যাটফর্ম, যেখানে ড্রাইভার, ট্রাক মালিক, রিটেইলার এবং কোম্পানিগুলো সহজে ট্রিপ বুকিং, ট্র্যাকিং ও ডিজিটাল পেমেন্ট করতে পারে।",
    },
    {
      id: "6",
      question: "পেমেন্ট পদ্ধতি কী?",
      answer:
        "EasyTruck একটি স্মার্ট প্ল্যাটফর্ম, যেখানে ড্রাইভার, ট্রাক মালিক, রিটেইলার এবং কোম্পানিগুলো সহজে ট্রিপ বুকিং, ট্র্যাকিং ও ডিজিটাল পেমেন্ট করতে পারে।",
    },
  ],
};

// app download

export const appdownloadData: IDownloadAppData = {
  id: DOWNLOAD_PAGE_ID,
  title: "আমাদের মোবাইল অ্যাপ",
  subTitle: "ডাউনলোড করুন",
  description:
    "ইন্ডাস্ট্রিয়াল পরিবহন খাতে স্বচ্ছতা, গতিশীলতা ও খরচ কমিয়ে \nআনাই আমাদের মুল লক্ষ্য। ",
  driverAppBtnTitle: "ড্রাইভার অ্যাপ",
  driverAppBtnLink: "",
  retailerAppBtnTitle: "রিটেইলার/কোম্পানি অফিসার অ্যাপ",
  retailerAppBtnLink: "",
  image: images.appDownload,
};

// footer

export const footerData: IFooterData = {
  logo: (
    <LogoIcon
      className="w-36 lg:w-44"
      color={colors["blue-900"]}
      textColor={colors["blue-900"]}
    />
  ),
  description: "হাতের মুঠোয় ট্রাক ভাড়ার স্মার্ট সমাধান",
  contacts: ["01712-898613", "01898-923559"],
  addressTitle: "ইজি ভেঞ্চারস",
  address: "লেভেল ৬বি, সিলিকন টাওয়ার, হাইটেক পার্ক, \nরাজশাহী-৬০০০",
  links: [
    {
      title: "Home",
      link: HOME_PAGE_ID,
    },
    {
      title: "About",
      link: ABOUT_PAGE_ID,
    },
    {
      title: "Help Center",
      link: HELP_PAGE_ID,
    },
    {
      title: "Contact",
      link: CONTACT_PAGE_ID,
    },
  ],
  socialLinks: [
    {
      icon: <FacebookIcon className="w-4 aspect-square md:w-5 text-white" />,
      link: "",
      ariaLabel: "Facebook",
    },
    {
      icon: <InstagramIcon className="w-4 aspect-square md:w-5 text-white" />,
      link: "",
      ariaLabel: "Instagram",
    },
    {
      icon: <LinkedInIcon className="w-4 aspect-square md:w-5 text-white" />,
      link: "",
      ariaLabel: "Linked in",
    },
    {
      icon: <TwitterIcon className="w-4 aspect-square md:w-5 text-white" />,
      link: "",
      ariaLabel: "Twitter",
    },
  ],
  phoneIcon: <PhoneIcon className="w-6 md:w-8 lg:w-10 text-white" />,
  copyrightTexts: ["© 2025", " EasyTruck.", " All rights reserved."],
  privacyPolicyLink: "",
  privacyPolicyText: "Privacy & Policy",
  helpCenterLink: "",
  helpCenterText: "Help Center",
};
