import { locations } from "@/dummydata";

export function PresenceSection() {
  return (
    <section className="w-full bg-[#F3F1EF] border-y border-[#25211B]/6">
      <div className="hidden md:grid md:grid-cols-[auto_1fr]">
        <div className="flex flex-col items-center border-x border-[#25211B]/6 px-4 w-[24px] box-content pt-10">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C] mb-2" />
          <span className="font-mono text-[11px] text-[#635A4E]">06</span>
        </div>

        <div>
          <div className="px-12 lg:px-16 pt-12 pb-6">
            <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#635A4E] leading-[120%] uppercase">
              Presence
            </span>
          </div>

          <div className="pr-16 pl-10">

            <div className="flex">
              <div className="flex-1 ml-8 py-5 border-b border-[#25211B]/6 text-left">
                <span className="block text-[24px] font-normal text-[#25211B] tracking-[0px] font-[PP_Eiko] leading-[31.2px] mb-1">New York, New York</span>
                <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#CD5C1C] leading-[120%] uppercase">United States</span>
              </div>
              <div className="flex-1 ml-8 py-5 border-b border-[#25211B]/6 text-left">
                <span className="block text-[24px] font-normal text-[#25211B] tracking-[0px] font-[PP_Eiko] leading-[31.2px] mb-1">Palm Beach, Florida</span>
                <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#CD5C1C] leading-[120%] uppercase">United States</span>
              </div>
              <div className="flex-1 ml-8 py-5 border-b border-[#25211B]/6 text-left">
                <span className="block text-[24px] font-normal text-[#25211B] tracking-[0px] font-[PP_Eiko] leading-[31.2px] mb-1">George Town</span>
                <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#CD5C1C] leading-[120%] uppercase">Cayman Islands</span>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 ml-8 py-5 border-b border-[#25211B]/6 text-left">
                <span className="block text-[24px] font-normal text-[#25211B] tracking-[0px] font-[PP_Eiko] leading-[31.2px] mb-1">London</span>
                <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#CD5C1C] leading-[120%] uppercase">United Kingdom</span>
              </div>
              <div className="flex-1 ml-8 py-5 border-b border-[#25211B]/6 text-left">
                <span className="block text-[24px] font-normal text-[#25211B] tracking-[0px] font-[PP_Eiko] leading-[31.2px] mb-1">Zürich</span>
                <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#CD5C1C] leading-[120%] uppercase">Switzerland</span>
              </div>
              <div className="flex-1 ml-8 py-5 border-b border-[#25211B]/6 text-left">
                <span className="block text-[24px] font-normal text-[#25211B] tracking-[0px] font-[PP_Eiko] leading-[31.2px] mb-1">Dubai</span>
                <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#CD5C1C] leading-[120%] uppercase">United Arab Emirates</span>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 ml-8 py-5 border-b border-[#25211B]/6 text-left">
                <span className="block text-[24px] font-normal text-[#25211B] tracking-[0px] font-[PP_Eiko] leading-[31.2px] mb-1">Singapore</span>
                <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#CD5C1C] leading-[120%] uppercase">Republic of Singapore</span>
              </div>
              <div className="flex-1 ml-8 py-5 border-b border-[#25211B]/6 text-left">
                <span className="block text-[24px] font-normal text-[#25211B] tracking-[0px] font-[PP_Eiko] leading-[31.2px] mb-1">Hong Kong</span>
                <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#CD5C1C] leading-[120%] uppercase">SAR, China</span>
              </div>
              <div className="flex-1 ml-8 py-5 border-b border-[#25211B]/6 text-left">
                <span className="block text-[24px] font-normal text-[#25211B] tracking-[0px] font-[PP_Eiko] leading-[31.2px] mb-1">Sydney, New South Wales</span>
                <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#CD5C1C] leading-[120%] uppercase">Australia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col">
        <div className="flex items-center gap-2 mx-3 px-4 py-6 border-x border-b border-[#25211B]/6">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C]" />
          <span className="font-mono text-[11px] text-[#635A4E]">05</span>
          <div className="h-[7px] flex-1 bg-[repeating-linear-gradient(to_right,#CD5C1C_0px,#CD5C1C_2px,transparent_2px,transparent_6px)]" />
          <span className="font-mono text-[11px] font-normal tracking-[1px] text-[#635A4E] leading-[120%] uppercase">
            Presence
          </span>
        </div>
        <div className="mx-3 border-x border-[#25211B]/6">
          {locations.map((location) => (
            <div
              key={location.city}
              className="px-8 py-6 border-b border-[#25211B]/6"
            >
              <span
                className="block text-[24px] font-normal text-[#25211B] tracking-[0px] leading-[130%] mb-2"
                style={{ fontFamily: "'PP Eiko', serif" }}
              >
                {location.city}
              </span>
              <span className="font-mono text-[12px] font-normal tracking-[1px] text-[#CD5C1C] leading-[120%] uppercase">
                {location.country}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
