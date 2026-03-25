import Image from "next/image";

export function AboutSection() {
  return (
    <section className="w-full bg-[#F3F1EF] border-b border-[#25211B]/6">

      <div className="hidden md:grid md:grid-cols-[auto_auto_1fr] min-h-[600px]">
        <div className="flex flex-col items-center justify-center border-x border-[#25211B]/6 px-4 w-[24px] box-content">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C] mb-2" />
          <span className="font-mono text-[11px] text-[#635A4E]">01</span>
          <div className="mt-4 w-[6px] h-[550px] bg-[repeating-linear-gradient(to_bottom,#CD5C1C_0px,#CD5C1C_1px,transparent_1px,transparent_5px)]" />
        </div>
        <div className="relative w-[280px] lg:w-[320px] my-8 ml-8">
          <Image
            src="/assets/about.png"
            alt="Architectural sculpture"
            fill
            sizes="(min-width: 1024px) 320px, 280px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-start px-12 lg:px-16 py-12">
          <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#635A4E] leading-[120%] uppercase mb-5">
            About the Firm
          </span>

          <h2
            className="text-[36px] lg:text-[42px] font-normal text-[#25211B] max-w-[600px] tracking-[0px]"
            style={{ fontFamily: "'PP Eiko', serif", lineHeight: "120%" }}
          >
            We advise where the stakes are highest and the margin for error is smallest.
          </h2>
          <span className="h-[140px] w-[2px] bg-[#25211B]/6 ml-24 mt-12"></span>

          <div className="mt-auto flex flex-col gap-8 max-w-[560px] pt-12 pl-24">
            <p className="font-sans text-[15px] leading-[160%] font-normal text-[#635A4E] tracking-[0px]">
              Our clients are individuals and families with significant wealth, complex
              international structures, and affairs that span multiple jurisdictions, advisors, and
              asset classes.
            </p>

            <p className="font-sans text-[15px] leading-[160%] font-normal text-[#635A4E] tracking-[0px]">
              We do not manage assets. We do not sell financial products. We provide
              independent counsel and hands-on execution across the full spectrum of our
              clients&apos; private affairs — from capital deployment and M&A to international
              structuring and the resolution of distressed or disputed matters.
            </p>

            <p className="font-sans text-[15px] leading-[160%] font-normal text-[#635A4E] tracking-[0px]">
              We work alongside our clients&apos; existing professional teams — their lawyers,
              accountants, bankers, and investment managers — ensuring alignment,
              identifying gaps, and resolving issues that fall between the cracks.
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col">
        <div className="flex items-center gap-2 px-4 py-6">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C]" />
          <span className="font-mono text-[11px] text-[#635A4E]">01</span>
          <div className="h-[7px] flex-1 bg-[repeating-linear-gradient(to_right,#CD5C1C_0px,#CD5C1C_2px,transparent_2px,transparent_6px)]" />
        </div>
        <div className="relative w-full h-[350px]">
          <Image
            src="/assets/mobile-about.png"
            alt="Architectural sculpture"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col mx-3 border-x border-[#25211B]/6 px-6 pt-6 pb-10 md:py-8">
          <span className="font-mono text-[12px] md:text-[13px] font-normal tracking-[2px] text-[#635A4E] mb-4">
            ABOUT THE FIRM
          </span>

          <h2
            className="text-[24px] md:text-[28px] font-normal text-[#25211B] tracking-[0px]"
            style={{ fontFamily: "'PP Eiko', serif", lineHeight: "120%" }}
          >
            We advise where the stakes are highest and the margin for error is smallest.
          </h2>

          <div className="flex flex-col gap-6 mt-8">
            <p className="font-sans text-[14px] leading-[160%] font-normal text-[#635A4E] tracking-[0px]">
              Our clients are individuals and families with significant wealth, complex
              international structures, and affairs that span multiple jurisdictions, advisors, and
              asset classes.
            </p>

            <p className="font-sans text-[14px] leading-[160%] font-normal text-[#635A4E] tracking-[0px]">
              We do not manage assets. We do not sell financial products. We provide
              independent counsel and hands-on execution across the full spectrum of our
              clients&apos; private affairs — from capital deployment and M&A to international
              structuring and the resolution of distressed or disputed matters.
            </p>

            <p className="font-sans text-[14px] leading-[160%] font-normal text-[#635A4E] tracking-[0px]">
              We work alongside our clients&apos; existing professional teams — their lawyers,
              accountants, bankers, and investment managers — ensuring alignment,
              identifying gaps, and resolving issues that fall between the cracks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
