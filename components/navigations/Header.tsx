import { headerData, HOME_PAGE_ID } from "@/service";
import Link from "next/link";

function Header() {
  return (
    <header className="relative z-50 border-b border-white/10 h-[5.375rem] flex items-center font-siliguri">
      <div className="containerX flex items-center justify-between text-white">
        <Link
          href={`#${HOME_PAGE_ID}`}
          className="flex items-center gap-2.5"
          aria-label="Go to Home"
        >
          {headerData.logo}
        </Link>
        <button
          type="button"
          className="btn gap-2.5 text-base font-bold bg-main-600 pl-6 pr-8 py-3 rounded-lg"
        >
          {headerData.appDownloadBtnIcon}
          {headerData.appDownloadBtnTitle}
        </button>
      </div>
    </header>
  );
}

export default Header;
