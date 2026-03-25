import Image from "next/image";
import { ClientTypesGrid } from "./client-types-grid";

export function ClientsSection() {
  return (
    <section className="w-full bg-[#F3F1EF]">
      <div className="hidden md:grid md:grid-cols-[auto_450px_1fr] border-b border-[#25211B]/6 min-h-[500px]">
        <div className="flex flex-col items-center border-x border-[#25211B]/6 px-4 w-[24px] box-content pt-10">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C] mb-2" />
          <span className="font-mono text-[11px] text-[#635A4E]">03</span>
        </div>
        <div className="py-6 border-r border-[#25211B]/6">
          <div className="relative w-full h-full">
            <Image
              src="/assets/serve.png"
              alt="Architectural columns"
              fill
              sizes="(min-width: 768px) 450px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col justify-center px-12 lg:px-16 py-12">
          <span className="font-mono text-[13px] font-normal tracking-[2px] text-[#635A4E] uppercase mb-5">
            Who We Serve
          </span>

          <h2
            className="text-[36px] lg:text-[40px] font-normal text-[#25211B] max-w-[600px] tracking-[0px] leading-[115%]"
            style={{ fontFamily: "'PP Eiko', serif" }}
          >
            Our clients are{" "}
            <em className="font-light italic" style={{ fontFamily: "'PP Eiko', serif" }}>
              entrepreneurs, principals, and multi-generational families managing significant private wealth
            </em>{" "}
            across multiple jurisdictions.
          </h2>
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-[auto_1fr]">
        <div className="flex flex-col items-center border-x border-[#25211B]/6 px-4 w-[24px] box-content pt-8 pb-8">
          <span className="font-mono text-[13px] text-[#635A4E] tracking-[1px] leading-[120%] uppercase whitespace-nowrap mb-6 [writing-mode:vertical-rl] [text-orientation:mixed]">
            Clients
          </span>
          <div className="w-[6px] flex-1 bg-[repeating-linear-gradient(to_bottom,#CD5C1C_0px,#CD5C1C_1px,transparent_1px,transparent_5px)]" />
        </div>

        <div>
          <div className="flex flex-col gap-6 px-12 lg:px-16 py-12 border-b border-[#25211B]/6">
            <div className="max-w-[600px] ml-auto">
              <p className="font-sans text-[15px] leading-[160%] font-normal text-[#635A4E] tracking-[0px] mb-6">
                Many have complex holding structures, diverse asset portfolios, and professional
                teams that require a senior point of coordination.
              </p>
              <p className="font-sans text-[15px] leading-[160%] font-normal text-[#635A4E] tracking-[0px]">
                We also act for institutional investors, sovereign entities, and private offices
                requiring independent advisory on specific transactions or matters.
              </p>
            </div>
          </div>

          <ClientTypesGrid />
        </div>
      </div>
      <div className="md:hidden flex flex-col">
        <div className="flex items-center gap-2 mx-3 px-4 py-6 border-x border-b border-[#25211B]/6">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C]" />
          <span className="font-mono text-[11px] text-[#635A4E]">03</span>
          <div className="h-[7px] flex-1 bg-[repeating-linear-gradient(to_right,#CD5C1C_0px,#CD5C1C_2px,transparent_2px,transparent_6px)]" />
          <span className="font-mono text-[11px] font-normal tracking-[1px] text-[#635A4E] leading-[120%] uppercase">
            Who We Serve
          </span>
        </div>

        <div className="relative w-full h-[320px] sm:h-[360px]">
          <Image
            src="/assets/serve.png"
            alt="Architectural columns"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col mx-3 border-x border-[#25211B]/6 px-6 py-8">
          <h2
            className="text-[24px] font-normal text-[#25211B] tracking-[0px]"
            style={{ fontFamily: "'PP Eiko', serif", lineHeight: "130%" }}
          >
            Our clients are{" "}
            <em className="font-light italic" style={{ fontFamily: "'PP Eiko', serif" }}>
              entrepreneurs, principals, and multi-generational families managing significant private wealth
            </em>{" "}
            across multiple jurisdictions.
          </h2>
        </div>

        <div className="mx-3 flex items-center gap-2 border-x border-y border-[#25211B]/6 px-6 py-5">
          <div className="h-[7px] flex-1 bg-[repeating-linear-gradient(to_right,#CD5C1C_0px,#CD5C1C_2px,transparent_2px,transparent_6px)]" />
          <span className="font-mono text-[11px] font-normal tracking-[1px] text-[#635A4E] leading-[120%] uppercase">
            Clients
          </span>
        </div>

        <div className="mx-3 border-x border-b border-[#25211B]/6 px-6 py-8">
          <p className="font-sans text-[14px] leading-[160%] font-normal text-[#635A4E] tracking-[0px] mb-8">
            Many have complex holding structures, diverse asset portfolios, and professional
            teams that require a senior point of coordination.
          </p>
          <p className="font-sans text-[14px] leading-[160%] font-normal text-[#635A4E] tracking-[0px]">
            We also act for institutional investors, sovereign entities, and private offices
            requiring independent advisory on specific transactions or matters.
          </p>
        </div>

        <ClientTypesGrid />
      </div>
    </section>
  );
}
