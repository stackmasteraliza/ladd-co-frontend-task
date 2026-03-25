import Image from "next/image";
import { NumberedServicesGrid } from "./numbered-services-grid";
import { AdditionalServicesGrid } from "./additional-services-grid";

export function ServicesSection() {
  return (
    <section className="w-full bg-[#F3F1EF] border-y border-[#25211B]/6">
      <div className="hidden md:grid md:grid-cols-[auto_1fr_1fr_auto] min-h-[500px]">
        <div className="flex flex-col items-center border-x border-[#25211B]/6 px-4 w-[24px] box-content pt-12">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C] mb-2" />
          <span className="font-mono text-[11px] text-[#635A4E]">02</span>
        </div>
        <div className="flex flex-col justify-start px-12 lg:px-16 pt-12">
          <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#635A4E] leading-[120%] uppercase mb-5">
            Services
          </span>

          <h2
            className="text-[48px] font-extralight text-[#25211B] max-w-[400px] tracking-[0px] pt-1"
            style={{ fontFamily: "'PP Eiko', serif", lineHeight: "130%" }}
          >
            Advisory<br />& Execution
          </h2>
        </div>

        <div className="py-8 border-l border-[#25211B]/6">
          <div className="relative w-full h-full">
            <Image
              src="/assets/service.png"
              alt="Advisory and execution"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="border-x border-[#25211B]/6 px-4 w-[24px] box-content" />
      </div>
      <div className="md:hidden flex flex-col">
        <div className="flex items-center gap-2 mx-3 px-4 py-5 border-x border-b border-[#25211B]/6">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C]" />
          <span className="font-mono text-[11px] text-[#635A4E]">02</span>
          <div className="h-[7px] flex-1 bg-[repeating-linear-gradient(to_right,#CD5C1C_0px,#CD5C1C_2px,transparent_2px,transparent_6px)]" />
          <span className="font-mono text-[11px] font-normal tracking-[1px] text-[#635A4E] leading-[120%] uppercase">
            Services
          </span>
        </div>

        <div className="flex flex-col mx-3 border-x border-[#25211B]/6 px-6 py-8">
          <h2
            className="text-[28px] font-normal text-[#25211B] tracking-[0px] md:mb-8 mb-2"
            style={{ fontFamily: "'PP Eiko', serif", lineHeight: "120%" }}
          >
            Advisory<br />& Execution
          </h2>

        </div>
        <div className="relative mx-3 h-[250px]">
          <Image
            src="/assets/service.png"
            alt="Advisory and execution"
            fill
            sizes="calc(100vw - 1.5rem)"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-[auto_1fr]">
        <div className="flex flex-col items-center border-x border-[#25211B]/6 px-4 w-[24px] box-content pt-8 pb-8">
          <span className="font-mono text-[13px] text-[#635A4E] tracking-[1px] leading-[120%] uppercase whitespace-nowrap mb-6 [writing-mode:vertical-rl] [text-orientation:mixed]">
            Services
          </span>
          <div className="w-[6px] flex-1 bg-[repeating-linear-gradient(to_bottom,#CD5C1C_0px,#CD5C1C_1px,transparent_1px,transparent_5px)]" />
        </div>
        <div>
          <NumberedServicesGrid />
          <AdditionalServicesGrid />
        </div>
      </div>

      <div className="md:hidden">
        <NumberedServicesGrid />
        <AdditionalServicesGrid />
      </div>
    </section>
  );
}
