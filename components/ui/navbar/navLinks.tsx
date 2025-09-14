import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", path: "/", name: "Home" },
  { id: "shop", path: "/shop", name: "Shop" },
  { id: "about-us", path: "/about-us", name: "About Us" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex  lg:gap-10">
      {links.map((link) => (
        <li
          key={link.id}
          className={cn(
            "font-inter text-sm font-medium text-[#141718] hover:opacity-100",
            pathname !== link.path && "opacity-70",
          )}
        >
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}
