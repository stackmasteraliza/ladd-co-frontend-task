import { numberedServices } from "@/dummydata";

export function NumberedServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#25211B]/6">
      {numberedServices.map((service, index) => (
        <div
          key={index}
          className={`mx-3 md:mx-0 border-x md:border-x-0 p-6 md:pl-[72px] md:pr-12 md:py-10 border-b border-[#25211B]/6 ${
            index % 2 === 0 ? "md:border-r" : ""
          } border-[#25211B]/6`}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <span className="font-mono text-[13px] text-[#CD5C1C] md:mt-2">
              {service.number}
            </span>
            <div>
              <h3
                className="text-[24px] font-normal text-[#25211B] tracking-[0px] md:mb-4 mb-2 max-w-[310px]"
                style={{ fontFamily: "'PP Eiko', serif", lineHeight: "140%" }}
              >
                {service.title}
              </h3>
              <p className="font-sans text-[15px] leading-[160%] font-normal text-[#635A4E] tracking-[0px] max-w-[450px]">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
