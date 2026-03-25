"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MoveRight } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

function HamburgerIcon() {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="1" fill="#25211B" />
      <rect y="5" width="16" height="1" fill="#25211B" />
      <rect y="10" width="16" height="1" fill="#CD5C1C" />
    </svg>
  );
}

export function MobileNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="md:hidden bg-transparent font-mono text-foreground border-b border-[#25211B]/6">
        <div className="flex h-12 items-center justify-between">
          <Link href="/" className="flex items-center gap-8 ml-3">
            <div className="border-l border-[#25211B]/6 py-3 pl-4">
              <Image
                src="/assets/logo.png"
                alt="Ladd & Co."
                width={24}
                height={24}
                priority
                unoptimized
              />
            </div>
            <span className="text-[16px] font-medium text-[#25211B]" style={{ fontFamily: "'PP Eiko', serif" }}>
              Ladd & Co.
            </span>
          </Link>

          <button
            className="border-r border-[#25211B]/6 px-4 py-4 mr-3"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon />
          </button>
        </div>

        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </nav>
      <div
        className="md:hidden flex items-center justify-between border-b border-[#25211B]/6"
        style={{ background: "linear-gradient(to right, #C5CAAA, #F3F1EF)" }}
      >
        <div className="flex items-center ml-1">
          <span className="block md:hidden h-[4px] w-[4px] bg-[#CD5C1C] mr-1" />
          <div className="flex items-center justify-center border-l border-[#25211B]/6 pl-4 box-content self-stretch">
            <span className="hidden md:block h-[5px] w-[5px] bg-[#CD5C1C]" />
          </div>
          <Link
            href="/contact"
            className="flex items-center py-2 md:ml-8 font-mono text-[13px] font-normal tracking-[1px] text-foreground transition-colors"
          >
            Request an Introduction <MoveRight className="size-4 text-[#25211B] ml-1 mt-[2px]" strokeWidth={1} />
          </Link>
        </div>
        <div className="flex items-center self-stretch">
          <div className="flex items-center justify-center border-r border-[#25211B]/6 w-[24px] box-content self-stretch">
            <span className="hidden md:block h-[5px] w-[5px] bg-[#CD5C1C]" />
          </div>
          <span className="block md:hidden h-[4px] w-[4px] bg-[#CD5C1C] ml-1 mr-1" />
        </div>
      </div>
    </>
  );
}
