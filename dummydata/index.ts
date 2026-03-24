import { AdditionalService, NumberedService, Location } from "@/types";

export const clientTypes: string[] = [
  "Ultra-High-Net-Worth Individuals & Families",
  "Institutional & Sovereign Investors",
  "Single & Multi-Family Offices",
  "Private Equity & Venture Principals",
  "Private Holding Companies",
  "Family-Owned Enterprises",
];

export const additionalServices: AdditionalService[] = [
  {
    title: "Debt Recovery & Asset Tracing",
    description:
      "Recovery of distressed receivables, disputed debts, and misappropriated assets across jurisdictions.",
  },
  {
    title: "Dispute Advisory",
    description:
      "Strategic counsel on commercial disputes, stakeholder conflicts, and litigation coordination.",
  },
  {
    title: "Family Governance",
    description:
      "Succession frameworks, governance structures, and next-generation preparation for family enterprises.",
  },
  {
    title: "Real Estate & Asset Structuring",
    description:
      "Acquisition structuring for international property. Optimal jurisdiction, entity, and tax treatment.",
  },
  {
    title: "Banking & Treasury",
    description:
      "Coordination of private banking relationships, treasury management, and lending facilities.",
  },
  {
    title: "Regulatory & Compliance",
    description:
      "Licence management, AML/KYC coordination, and ongoing regulatory obligations across jurisdictions.",
  },
];

export const numberedServices: NumberedService[] = [
  {
    number: "I",
    title: "Capital Placement & Investment Advisory",
    description:
      "Sourcing, structuring, and placing capital across private equity, real estate, venture, infrastructure, and direct investments. Full placement lifecycle from origination and due diligence through allocation and close.",
  },
  {
    number: "II",
    title: "Mergers, Acquisitions & Corporate Finance",
    description:
      "Buy-side and sell-side advisory for privately held businesses, portfolio companies, and family enterprises. Transaction management, valuation, negotiation, and post-close coordination.",
  },
  {
    number: "III",
    title: "Co-Investment & Syndication",
    description:
      "Origination and syndication of direct co-investment opportunities across our principal network. Deal structuring, capital formation, governance alignment, and investor relations.",
  },
  {
    number: "IV",
    title: "International Tax & Structuring",
    description:
      "Cross-border entity architecture, tax-efficient holding structures, estate and succession planning, and multi-jurisdictional compliance coordination across all relevant territories.",
  },
];

export const locations: Location[] = [
  { city: "New York, New York", country: "United States" },
  { city: "Palm Beach, Florida", country: "United States" },
  { city: "George Town", country: "Cayman Islands" },
  { city: "London", country: "United Kingdom" },
  { city: "Zürich", country: "Switzerland" },
  { city: "Dubai", country: "United Arab Emirates" },
  { city: "Singapore", country: "Republic of Singapore" },
  { city: "Hong Kong", country: "SAR, China" },
  { city: "Sydney, New South Wales", country: "Australia" },
];
