export function DiscretionSection() {
  return (
    <section className="w-full bg-[#C5CAAA]">
      <div className="hidden md:grid md:grid-cols-[auto_1fr] min-h-[300px]">
        <div className="flex items-center justify-center border-x border-[#25211B]/6 px-4 w-[24px] box-content">
          <div className="w-[6px] h-[250px] bg-[repeating-linear-gradient(to_bottom,#CD5C1C_0px,#CD5C1C_1px,transparent_1px,transparent_5px)]" />
        </div>
        <div className="flex flex-col justify-center px-12 lg:px-16 py-16">
          <h2
            className="text-[36px] lg:text-[42px] font-light italic text-[#25211B] max-w-[600px] tracking-[0px] mb-12"
            style={{ fontFamily: "'PP Eiko', serif", lineHeight: "130%" }}
          >
            Discretion is not a policy.<br />
            It is the nature of the work.
          </h2>
          <div className="max-w-[500px] ml-auto">
            <p className="font-sans text-[15px] leading-[160%] font-normal text-[#635A4E] tracking-[0px] mb-8">
              Our clients engage us because the matters they face are too consequential for
              rigid institutional processes and too complex for any single advisor. We operate
              with a permanent obligation of confidentiality — not because it is expected, but
              because the work demands it. The details of our engagements, our client
              relationships, and the outcomes we achieve are never disclosed.
            </p>

            <p className="font-mono text-[13px] leading-[160%] font-normal text-[#CD5C1C] tracking-[1px] uppercase">
              This is not a feature<br />
              of our service. It is the<br />
              foundation of it.
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden grid grid-cols-[auto_1fr]">
        <div className="flex justify-center border-x border-[#25211B]/6 px-4 w-[24px] box-content">
          <div className="my-10 w-[6px] self-stretch bg-[repeating-linear-gradient(to_bottom,#CD5C1C_0px,#CD5C1C_1px,transparent_1px,transparent_5px)]" />
        </div>

        <div className="px-6 py-10">
          <h2
            className="max-w-[280px] text-[22px] font-light italic text-[#25211B] tracking-[0px] mb-10"
            style={{ fontFamily: "'PP Eiko', serif", lineHeight: "130%" }}
          >
            Discretion is not a policy.<br />
            It is the nature of the work.
          </h2>

          <p className="font-sans text-[14px] leading-[170%] font-normal text-[#635A4E] tracking-[0px] mb-10">
            Our clients engage us because the matters they face are too consequential for
            rigid institutional processes and too complex for any single advisor. We operate
            with a permanent obligation of confidentiality — not because it is expected, but
            because the work demands it. The details of our engagements, our client
            relationships, and the outcomes we achieve are never disclosed.
          </p>

          <p className="font-mono text-[12px] leading-[160%] font-normal text-[#CD5C1C] tracking-[2px] uppercase">
            This is not a feature<br />
            of our service. It is the<br />
            foundation of it.
          </p>
        </div>
      </div>
    </section>
  );
}
