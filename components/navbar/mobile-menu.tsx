"use client";

import Link from "next/link";
import Image from "next/image";
import { X, MoveRight } from "lucide-react";
import { firmLinks } from "./nav-links";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div
      className="fixed inset-0 top-0 z-50 flex flex-col"
      style={{ background: "linear-gradient(to bottom, #C5CAAA, #D5D4B8)" }}
    >
      <div className="flex h-12 items-center justify-between border-b border-[#25211B]/6 bg-[#F3F1EF]">
        <Link href="/" className="flex items-center gap-4" onClick={onClose}>
          <div className="border-x border-[#25211B]/6 py-3 px-3">
            <Image
              src="/assets/logo.png"
              alt="Ladd & Co."
              width={22}
              height={22}
              priority
              unoptimized
            />
          </div>
          <span className="text-[16px] font-medium text-[#25211B]" style={{ fontFamily: "'PP Eiko', serif" }}>
            Ladd & Co.
          </span>
        </Link>
        <button
          className="px-4 py-4 mr-3"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X className="size-5 text-[#25211B]" />
        </button>
      </div>

      <div
        className="flex items-center justify-between border-b border-[#25211B]/6"
        style={{ background: "linear-gradient(to right, #C5CAAA, #25211B)" }}
      >
        <div className="flex items-stretch">
          <div className="flex items-center justify-center border-x border-[#25211B]/6 px-3 w-[22px] box-content">
            <span className="block h-[4px] w-[4px] bg-[#CD5C1C]" />
          </div>
          <Link
            href="/contact"
            className="flex items-center py-2 font-mono text-[13px] font-normal tracking-[1px] text-foreground transition-colors ml-6"
            onClick={onClose}
          >
            Request an Introduction <MoveRight className="size-4 text-[#25211B] ml-1 mt-[2px]" strokeWidth={1} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center pt-6 gap-[20px]">
        <span className="font-mono text-[13px] font-normal tracking-[2px] text-[#635A4E] mb-2">FIRM</span>
        {firmLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-sans text-[14px] font-normal text-[#25211B] transition-colors"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}

        <span className="font-mono text-[13px] font-normal tracking-[2px] text-[#635A4E] mt-6">CONTACT</span>
        <Link
          href="mailto:office@laddco.com"
          className="font-sans text-[14px] font-normal text-[#25211B]"
        >
          office@laddco.com
        </Link>
        <div className="w-full border-b border-[#25211B]/6" />
        <Link
          href="/login"
          className="block text-center font-mono text-[13px] font-normal tracking-[2px] text-[#25211B]"
          onClick={onClose}
        >
          CLIENT LOGIN
        </Link>
      </div>
    </div>
  );
}
