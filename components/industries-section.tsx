const industries = [
  "Technology & Software",
  "Real Estate & Development",
  "Energy & Natural Resources",
  "Financial Services",
  "Healthcare & Life Sciences",
  "Infrastructure & Logistics",
  "Consumer & Luxury Goods",
  "Private Equity & Venture Capital",
  "Industrials & Manufacturing",
  "Hospitality & Entertainment",
  "Defence & Aerospace",
  "Media & Telecommunications",
];

const industryRows = Array.from(
  { length: Math.ceil(industries.length / 4) },
  (_, rowIndex) => industries.slice(rowIndex * 4, rowIndex * 4 + 4)
);

export function IndustriesSection() {
  return (
    <section className="w-full bg-[#F3F1EF] border-t border-[#25211B]/6 pt-4">
      <div className="hidden md:grid md:grid-cols-[auto_1fr]">
        <div className="flex flex-col items-center border-x border-[#25211B]/6 px-4 w-[24px] box-content pt-10">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C] mb-2" />
          <span className="font-mono text-[11px] text-[#635A4E]">04</span>
        </div>

        <div>
          <div className="px-12 lg:px-16 pt-8 pb-6">
            <span className="font-mono text-[13px] font-normal tracking-[1px] text-[#635A4E] leading-[120%] uppercase">
              Industries
            </span>
          </div>

          <div className="pr-16 pl-8">
            {industryRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex">
                {row.map((industry) => (
                  <div
                    key={industry}
                    className="flex-1 ml-8 py-5 border-b border-[#25211B]/6 text-left"
                  >
                    <span className="font-sans text-[15px] font-normal text-[#635A4E] tracking-[0px] leading-[160%]">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col">
        <div className="mx-3 flex items-center gap-2 border-x border-b border-[#25211B]/6 px-4 py-6">
          <span className="block h-[5px] w-[5px] bg-[#CD5C1C]" />
          <span className="font-mono text-[11px] text-[#635A4E]">04</span>
          <div className="h-[7px] flex-1 bg-[repeating-linear-gradient(to_right,#CD5C1C_0px,#CD5C1C_2px,transparent_2px,transparent_6px)]" />
          <span className="font-mono text-[11px] font-normal tracking-[1px] text-[#635A4E] leading-[120%] uppercase">
            Industries
          </span>
        </div>

        <div className="mx-3 border-x border-[#25211B]/6">
          {industries.map((industry) => (
            <div key={industry} className="border-b border-[#25211B]/6 px-8 py-5">
              <span className="font-sans text-[15px] font-normal text-[#635A4E] tracking-[0px] leading-[160%]">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
