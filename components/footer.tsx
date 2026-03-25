import Link from "next/link";
import { MoveRight } from "lucide-react";
import { locations } from "@/dummydata";
import { firmLinks } from "./navbar/nav-links";

const introductionHref =
  "mailto:office@laddco.com?subject=Request%20an%20Introduction";

const officeCities = locations.map(({ city }) => city.split(",")[0].trim());
const currentYear = new Date().getFullYear();

function FooterMark() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="24" height="24" fill="#25211B" />
      <rect x="18" width="1.5" height="24" fill="#F3F1EF" />
      <rect x="22.5" width="1.5" height="24" fill="#F3F1EF" />
      <rect x="13.5" width="1.5" height="24" fill="#F3F1EF" />
      <rect x="9" width="1.5" height="24" fill="#F3F1EF" />
      <rect x="4.5" width="1.5" height="24" fill="#F3F1EF" />
      <path d="M3 11L4.5 10V14L3 13V11Z" fill="#F3F1EF" />
      <path d="M7.5 8.5L9 7.5V16.5L7.5 15.5V8.5Z" fill="#F3F1EF" />
      <path d="M12 6L13.5 5V19L12 18V6Z" fill="#F3F1EF" />
      <path d="M16.5 4L18 3V21L16.5 20V4Z" fill="#F3F1EF" />
      <path d="M21 3L22.5 2V22L21 21V3Z" fill="#F3F1EF" />
    </svg>
  );
}

function FooterXIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15.2721 1.58643H18.0833L11.9416 8.606L19.1668 18.1581H13.5095L9.07852 12.3648L4.00845 18.1581H1.19552L7.76469 10.6498L0.833496 1.58643H6.63442L10.6397 6.8817L15.2721 1.58643ZM14.2854 16.4754H15.8432L5.78799 3.1807H4.11638L14.2854 16.4754Z"
        fill="#C5CAAA"
      />
    </svg>
  );
}

function FooterLinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g clipPath="url(#footer-linkedin-clip)">
        <path
          d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
          fill="#C5CAAA"
        />
      </g>
      <defs>
        <clipPath id="footer-linkedin-clip">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#25211B] text-[#D7CFC3] border-t border-[#F3F1EF0F]">
      <div className="hidden xl:grid xl:grid-cols-[56px_minmax(0,1fr)_56px] border-b border-[#F3F1EF0F]">
        <div className="border-r border-[#F3F1EF0F]" />
        <div className="grid grid-cols-[56px_minmax(0,1fr)] bg-[linear-gradient(90deg,#C5CAAA_0%,#B8BC9D_24%,#8A8E74_46%,#25211B_82%)]">
          <div className="flex items-center justify-center border-r border-[#F3F1EF0F] py-3">
            <span className="block h-[5px] w-[5px] bg-[#CD5C1C]" />
          </div>
          <a
            href={introductionHref}
            className="flex items-center gap-2 px-8 py-3 text-[#25211B]"
          >
            <span
              className="text-[18px] font-normal tracking-[0px]"
              style={{ fontFamily: "'PP Eiko', serif", lineHeight: "130%" }}
            >
              Request an Introduction
            </span>
            <MoveRight className="size-4 mt-[2px]" strokeWidth={1.25} />
          </a>
        </div>
        <div className="border-l border-[#F3F1EF0F]" />
      </div>

      <div className="hidden xl:grid xl:grid-cols-[56px_56px_minmax(0,1fr)_640px_56px] border-b border-[#F3F1EF0F]">
        <div className="border-r border-[#F3F1EF0F]" />

        <div className="flex items-start justify-center border-r border-[#F3F1EF0F] pt-16 pb-16">
          <FooterMark />
        </div>

        <div className="flex min-h-[448px] flex-col border-r border-[#F3F1EF0F] px-12 pt-16 pb-16">
          <div>
            <h2
              className="text-[24px] font-normal text-[#F0E8DB]"
              style={{ fontFamily: "'PP Eiko', serif", lineHeight: "120%" }}
            >
              Ladd & Co.
            </h2>

            <p className="mt-8 max-w-[480px] font-mono text-[14px] font-normal leading-[170%] tracking-[1.5px] text-[#CD5C1C] uppercase">
              Advisory and execution for families, principals, and private
              institutions with interests that demand discretion.
            </p>
          </div>

          <Link
            href="/login"
            className="mt-14 font-mono text-[13px] font-normal uppercase tracking-[1.5px] text-[#D8D0C4]"
          >
            Client Login
          </Link>

          <div className="mt-auto flex items-center gap-5 pt-12 text-[#C9C4B6]">
            <Link href="#" aria-label="X">
              <FooterXIcon />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FooterLinkedInIcon />
            </Link>
          </div>
        </div>

        <div className="px-12 pt-16 pb-16">
          <div className="grid grid-cols-[180px_1fr] gap-16">
            <div>
              <span className="font-mono text-[13px] font-normal uppercase leading-[120%] tracking-[1px] text-[#5D554B]">
                Firm
              </span>

              <div className="mt-6 flex flex-col gap-4">
                {firmLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[17px] font-normal text-[#AAA194] leading-[140%]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-[13px] font-normal uppercase leading-[120%] tracking-[1px] text-[#5D554B]">
                Contact
              </span>

              <a
                href="mailto:office@laddco.com"
                className="mt-6 block text-[17px] font-normal text-[#AAA194] leading-[140%]"
              >
                office@laddco.com
              </a>

              <span className="mt-8 block font-mono text-[13px] font-normal uppercase leading-[120%] tracking-[1px] text-[#5D554B]">
                Offices
              </span>

              <div className="mt-6 flex flex-col gap-3">
                {officeCities.map((city) => (
                  <span
                    key={city}
                    className="text-[17px] font-normal text-[#AAA194] leading-[140%]"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-l border-[#F3F1EF0F]" />
      </div>

      <div className="hidden xl:grid xl:grid-cols-[56px_56px_minmax(0,1fr)_640px_56px] items-stretch">
        <div className="border-r border-[#F3F1EF0F]" />
        <div className="border-r border-[#F3F1EF0F]" />
        <p className="flex items-center px-12 py-7 font-mono text-[12px] font-normal uppercase tracking-[1.5px] text-[#5D554B]">
          Copyright © {currentYear} Ladd & Co.. All rights reserved.
        </p>
        <div className="flex items-center justify-end px-12 py-7 text-right">
          <Link
            href="#"
            className="font-mono text-[12px] font-normal uppercase tracking-[1.5px] text-[#5D554B]"
          >
            Legal
          </Link>
        </div>
        <div className="border-l border-[#F3F1EF0F]" />
      </div>

      <div className="hidden md:block xl:hidden">
        <div className="grid grid-cols-[56px_minmax(0,1fr)] border-b border-[#F3F1EF0F] bg-[linear-gradient(90deg,#C5CAAA_0%,#B8BC9D_26%,#8A8E74_56%,#25211B_86%)]">
          <div className="flex items-center justify-center border-r border-[#F3F1EF0F] py-3">
            <span className="block h-[5px] w-[5px] bg-[#CD5C1C]" />
          </div>
          <a
            href={introductionHref}
            className="flex items-center gap-2 px-8 py-3 text-[#25211B]"
          >
            <span
              className="text-[18px] font-normal tracking-[0px]"
              style={{ fontFamily: "'PP Eiko', serif", lineHeight: "130%" }}
            >
              Request an Introduction
            </span>
            <MoveRight className="size-4 mt-[2px]" strokeWidth={1.25} />
          </a>
        </div>

        <div className="grid grid-cols-[56px_minmax(0,1fr)] border-b border-[#F3F1EF0F] bg-[#25211B]">
          <div className="flex items-start justify-center border-r border-[#F3F1EF0F] pt-12 pb-12">
            <FooterMark />
          </div>

          <div className="px-8 pt-12 pb-12">
            <div>
              <h2
                className="text-[24px] font-normal text-[#F0E8DB]"
                style={{ fontFamily: "'PP Eiko', serif", lineHeight: "120%" }}
              >
                Ladd & Co.
              </h2>

              <p className="mt-7 max-w-[360px] font-mono text-[13px] font-normal leading-[170%] tracking-[1.45px] text-[#CD5C1C] uppercase">
                Advisory and execution for families, principals, and private
                institutions with interests that demand discretion.
              </p>

              <Link
                href="/login"
                className="mt-10 inline-block font-mono text-[12px] font-normal uppercase tracking-[1.5px] text-[#D8D0C4]"
              >
                Client Login
              </Link>

              <div className="mt-10 flex items-center gap-5 text-[#C9C4B6]">
                <Link href="#" aria-label="X">
                  <FooterXIcon />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <FooterLinkedInIcon />
                </Link>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-[160px_minmax(0,1fr)] gap-12">
              <div>
                <span className="font-mono text-[13px] font-normal uppercase leading-[120%] tracking-[1px] text-[#5D554B]">
                  Firm
                </span>

                <div className="mt-5 flex flex-col gap-4">
                  {firmLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[16px] font-normal text-[#AAA194] leading-[140%]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-[13px] font-normal uppercase leading-[120%] tracking-[1px] text-[#5D554B]">
                  Contact
                </span>

                <a
                  href="mailto:office@laddco.com"
                  className="mt-5 block text-[16px] font-normal text-[#AAA194] leading-[140%]"
                >
                  office@laddco.com
                </a>

                <span className="mt-8 block font-mono text-[13px] font-normal uppercase leading-[120%] tracking-[1px] text-[#5D554B]">
                  Offices
                </span>

                <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3">
                  {officeCities.map((city) => (
                    <span
                      key={city}
                      className="text-[16px] font-normal text-[#AAA194] leading-[140%]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[56px_minmax(0,1fr)] border-b border-[#F3F1EF0F] bg-[#25211B]">
          <div className="border-r border-[#F3F1EF0F]" />
          <div className="flex items-center justify-between gap-8 px-8 py-5">
            <p className="max-w-[280px] font-mono text-[11px] font-normal uppercase leading-[155%] tracking-[1.5px] text-[#5D554B]">
              Copyright © {currentYear} Ladd & Co.. All rights reserved.
            </p>

            <Link
              href="#"
              className="shrink-0 font-mono text-[12px] font-normal uppercase tracking-[1.5px] text-[#5D554B]"
            >
              Legal
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="border-b border-[#F3F1EF0F] bg-[linear-gradient(90deg,#C5CAAA_0%,#C0C4A5_26%,#8A8E74_62%,#5C5A4A_100%)]">
          <a
            href={introductionHref}
            className="flex items-center gap-20 px-5 py-3 text-[#25211B]"
          >
            <span className="block h-[5px] w-[5px] bg-[#CD5C1C]" />
            <span className="flex items-center gap-2">
              <span
                className="text-[16px] font-normal tracking-[0px]"
                style={{ fontFamily: "'PP Eiko', serif", lineHeight: "130%" }}
              >
                Request an Introduction
              </span>
              <MoveRight className="size-4 mt-[2px]" strokeWidth={1.25} />
            </span>
          </a>
        </div>

        <div className="border-b border-[#F3F1EF0F] bg-[#25211B] px-5 pt-11 pb-10">
          <div className="flex items-center gap-3">
            <FooterMark />
            <h2
              className="text-[20px] font-normal text-[#F0E8DB]"
              style={{ fontFamily: "'PP Eiko', serif", lineHeight: "120%" }}
            >
              Ladd & Co.
            </h2>
          </div>

          <p className="mt-8 max-w-[300px] font-mono text-[12px] font-normal leading-[170%] tracking-[1.45px] text-[#CD5C1C] uppercase">
            Advisory and execution for families, principals, and private
            institutions with interests that demand discretion.
          </p>

          <Link
            href="/login"
            className="mt-9 inline-block font-mono text-[12px] font-normal uppercase tracking-[1.5px] text-[#D8D0C4]"
          >
            Client Login
          </Link>

          <div className="mt-11 flex items-center gap-5 text-[#C9C4B6]">
            <Link href="#" aria-label="X">
              <FooterXIcon />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FooterLinkedInIcon />
            </Link>
          </div>
        </div>

        <div className="border-b border-[#F3F1EF0F] bg-[#25211B] px-5 pt-6 pb-7">
          <div className="grid grid-cols-[0.84fr_1.16fr] gap-6">
            <div>
              <span className="font-mono text-[13px] font-normal uppercase leading-[120%] tracking-[1px] text-[#5D554B]">
                Firm
              </span>

              <div className="mt-5 flex flex-col gap-[11px]">
                {firmLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[15px] font-normal text-[#AAA194] leading-[145%]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-[13px] font-normal uppercase leading-[120%] tracking-[1px] text-[#5D554B]">
                Contact
              </span>

              <a
                href="mailto:office@laddco.com"
                className="mt-5 block text-[15px] font-normal text-[#AAA194] leading-[145%]"
              >
                office@laddco.com
              </a>

              <span className="mt-8 block font-mono text-[13px] font-normal uppercase leading-[120%] tracking-[1px] text-[#5D554B]">
                Offices
              </span>

              <div className="mt-5 flex flex-col gap-[8px]">
                {officeCities.map((city) => (
                  <span
                    key={city}
                    className="text-[15px] font-normal text-[#AAA194] leading-[145%]"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#25211B] px-5 pt-4 pb-2">
          <Link
            href="#"
            className="font-mono text-[12px] font-normal uppercase tracking-[1.5px] text-[#5D554B]"
          >
            Legal
          </Link>
        </div>

        <div className="border-b border-[#F3F1EF0F] bg-[#25211B] px-5 pt-2 pb-5">
          <p className="max-w-[210px] font-mono text-[10px] font-normal uppercase leading-[155%] tracking-[1.5px] text-[#5D554B]">
            Copyright © {currentYear} Ladd & Co.. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
