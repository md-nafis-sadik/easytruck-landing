import { headerData, HOME_PAGE_ID } from "@/service";
import Link from "next/link";

function Header() {
  return (
    <header className="relative z-50 border-b border-white/10 h-[5.375rem] flex items-center">
      <div className="containerX flex items-center justify-between text-white">
        <Link href={`#${HOME_PAGE_ID}`} className="flex items-center gap-2.5">
          {headerData.logo}
          {headerData.logoTextIcon}
        </Link>
      </div>
    </header>
  );
}

export default Header;
