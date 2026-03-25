import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full bg-[#F3F1EF]">
      <div className="hidden md:grid md:grid-cols-[auto_1fr_auto] min-h-[600px]">
        <div className="flex items-start pt-20 justify-center border-x border-[#25211B]/6 px-4 w-[24px] box-content">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C]" />
        </div>
        <div className="flex flex-col justify-center pl-8 pr-12 py-20">
          <h1
            className="text-[46px] font-normal text-[#25211B] max-w-[800px] tracking-[0px]"
            style={{ fontFamily: "'PP Eiko', serif", lineHeight: "52.9px" }}
          >
            Advisory and execution for{" "}
            <em className="font-light italic" style={{ fontFamily: "'PP Eiko', serif" }}>families, principals, and private institutions</em>{" "}
            with interests that demand discretion.
          </h1>

          <p className="mt-8 font-sans text-[15px] leading-[160%] font-normal text-[#635A4E] tracking-[0px] max-w-[520px]">
            Ladd & Co. is a private advisory practice. We represent clients across
            transactions, capital strategy, structuring, and the management of sensitive
            matters across jurisdictions.
          </p>
        </div>
        <div className="w-[350px] lg:w-[420px] max-h-[500px] lg:max-h-full py-8 pr-8">
          <div className="relative w-full h-full">
            <Image
              src="/assets/hero.png"
              alt="Architectural sculpture"
              fill
              sizes="(min-width: 1024px) 420px, 350px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col">
        <div className="flex flex-col px-8 pt-8 pb-8 mx-3 border-x border-[#25211B]/6">
          <h1
            className="text-[35px] font-normal text-[#25211B] tracking-[0px]"
            style={{ fontFamily: "'PP Eiko', serif", lineHeight: "130%" }}
          >
            Advisory and execution for{" "}
            <em className="font-extralight italic" style={{ fontFamily: "'PP Eiko', serif" }}>families, principals, and private institutions</em>{" "}
            with interests that demand discretion.
          </h1>

          <p className="mt-3 md:mt-6 font-sans text-[14px] leading-[160%] font-normal text-[#635A4E] tracking-[0px]">
            Ladd & Co. is a private advisory practice. We represent clients across
            transactions, capital strategy, structuring, and the management of sensitive
            matters across jurisdictions.
          </p>
        </div>
        <div className="relative w-full h-[250px]">
          <Image
            src="/assets/hero.png"
            alt="Architectural sculpture"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
