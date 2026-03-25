import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

export function Navbar() {
  return (
    <header className="w-full">
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
