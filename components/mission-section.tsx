export function MissionSection() {
  return (
    <section className="w-full bg-[#C5CAAA]">
      <div className="hidden md:grid md:grid-cols-[auto_1fr] border-t border-[#25211B]/6 min-h-[364px]">
        <div className="flex items-center justify-center border-x border-[#25211B]/6 px-4 w-[24px] box-content">
          <div className="w-[6px] h-[250px] bg-[repeating-linear-gradient(to_bottom,#CD5C1C_0px,#CD5C1C_1px,transparent_1px,transparent_5px)]" />
        </div>
        <div className="flex flex-col justify-center px-16 py-[20px]">
          <h2 className="text-[32px] font-normal text-[#25211B] w-full tracking-[0px] font-[PP_Eiko] leading-[130%]">
            We operate as an extension of our clients&apos; interests —— advising, coordinating, and
            executing where the complexity demands a single, trusted point of contact.
          </h2>

          <p className="mt-8 font-sans text-[15px] leading-[160%] font-normal text-[#635A4E] tracking-[0px] max-w-[525px]">
            Whether the matter concerns a transaction, a restructure, a dispute, or an
            opportunity — our role is to ensure the outcome is resolved efficiently, discreetly,
            and in the client&apos;s favour.
          </p>
        </div>
      </div>

  
      <div className="md:hidden">
        <div className="flex justify-center py-5 border-b border-[#25211B]/6 w-full">
          <div className="h-[7px] w-[280px] bg-[repeating-linear-gradient(to_right,#CD5C1C_0px,#CD5C1C_2px,transparent_2px,transparent_6px)]" />
        </div>
        <div className="flex flex-col mx-3 border-x border-b border-[#25211B]/6 px-6 py-8">
          <h2 className="text-[22px] md:text-[24px] font-normal text-[#25211B] tracking-[0px] font-[PP_Eiko] leading-[130%]">
            We operate as an extension of our clients&apos; interests ——
            advising, coordinating, and executing where the complexity demands a single,
            trusted point of contact.
          </h2>

          <p className="mt-6 font-sans text-[15px] leading-[160%] font-normal text-[#635A4E] tracking-[0px]">
            Whether the matter concerns a transaction, a restructure, a dispute, or an
            opportunity — our role is to ensure the outcome is resolved efficiently, discreetly,
            and in the client&apos;s favour.
          </p>
        </div>
      </div>
    </section>
  );
}
