import { clientTypes } from "@/dummydata";

export function ClientTypesGrid() {
  const mobileClientTypes = clientTypes
    .filter((_, index) => index % 2 === 0)
    .concat(clientTypes.filter((_, index) => index % 2 === 1));

  return (
    <>
      <div className="hidden md:block">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex py-5 border-b border-[#25211B]/6">
            {clientTypes.slice(row * 2, row * 2 + 2).map((client, index) => (
              <div key={index} className="flex flex-1 items-center gap-6 pl-10">
                <div className="w-[40px] min-w-[40px] h-[2px] bg-[#CD5C1C]" />
                <span className="text-[20px] font-normal text-[#25211B] tracking-[0px] font-[PP_Eiko] leading-[140%]">
                  {client}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="md:hidden flex flex-col gap-6 mx-3 border-x border-[#25211B]/6 px-6 pt-8 pb-5">
        {mobileClientTypes.map((client) => (
          <div key={client} className="flex flex-col gap-6">
            <div className="h-px w-[42px] bg-[#CD5C1C]/60" />
            <span
              className="block max-w-[280px] text-[22px] font-normal text-[#25211B] tracking-[0px] leading-[130%]"
              style={{ fontFamily: "'PP Eiko', serif" }}
            >
              {client}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
