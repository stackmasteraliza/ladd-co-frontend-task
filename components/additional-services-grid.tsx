import { additionalServices } from "@/dummydata";

export function AdditionalServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:border-t border-[#25211B]/6">
      {additionalServices.map((service, index) => (
        <div
          key={index}
          className={`mx-3 md:mx-0 border-x md:border-x-0 px-6 md:px-14 md:py-12 pt-8 md:border-b border-[#25211B]/6 ${
            index % 3 !== 2 ? "md:border-r" : ""
          } border-[#25211B]/6`}
        >
          <h3
            className="font-sans text-[16px] font-medium text-[#25211B] tracking-[0px] leading-[160%] md:mb-3 mb-1"
          >
            {service.title}
          </h3>
          <p className="font-sans text-[15px] leading-[160%] font-normal text-[#635A4E] tracking-[0px]">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}
