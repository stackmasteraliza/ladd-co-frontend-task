import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { firmLinks } from "./nav-links";

export function DesktopNavbar() {
  return (
    <>
      <nav className="hidden md:block bg-transparent font-mono text-foreground border-b border-[#25211B]/6">
        <div className="mx-auto flex h-12 items-center justify-between">
          <Link href="/" className="flex items-center gap-8">
            <div className="border-x border-[#25211B]/6 px-4 py-2">
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

          <div className="flex items-center gap-[30px] pr-4">
            {firmLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] font-normal tracking-[1px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <Link
              href="/login"
              className="font-mono text-[11px] font-bold tracking-[1px] text-foreground transition-colors hover:text-muted-foreground"
            >
              CLIENT LOGIN
            </Link>
          </div>
        </div>
      </nav>

      <div
        className="hidden md:flex gap-8 border-b border-[#25211B]/6"
        style={{ background: "linear-gradient(to right, #C5CAAA, #F3F1EF)" }}
      >
        <div className="flex items-center justify-center border-x border-[#25211B]/6 px-4 w-[24px] box-content py-2">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C]" />
        </div>
        <Link
          href="/contact"
          className="flex items-center py-2 font-mono text-[13px] font-normal tracking-[1px] text-foreground transition-colors"
        >
          Request an Introduction <MoveRight className="size-4 text-[#25211B] ml-1 mt-[2px]" strokeWidth={1} />
        </Link>
      </div>
    </>
  );
}
