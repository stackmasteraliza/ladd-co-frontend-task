export interface NavLink {
  label: string;
  href: string;
}

export const firmLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Industries", href: "/industries" },
  { label: "Presence", href: "/presence" },
];
