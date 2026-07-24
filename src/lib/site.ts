export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path) return base || "/";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const BOOK =
  "https://www.fresha.com/a/glorious-nails-and-spa-ottawa-100-marche-way-ct2txvzo";
export const BOOK_MENU =
  "https://www.fresha.com/a/glorious-nails-and-spa-ottawa-100-marche-way-ct2txvzo/all-offer?menu=true&pId=220766";
export const BRAND = "Glorious Nails & Spa";
export const ADDRESS = "100 Marché Way, Unit 103, Lansdowne — TD Place, Ottawa, ON K1S 5J3";
export const PHONE = "(613) 680-8899";
export const TEL = "tel:+16136808899";
export const EMAIL = "mailto:contact@gloriousnailsandspa.ca";
export const IG = "https://www.instagram.com/glorious.nailsspa/";
export const MAPS =
  "https://www.google.com/maps/search/?api=1&query=100%20Marche%20Way%20Unit%20103%20Ottawa%20ON";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
