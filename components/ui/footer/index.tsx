"use client";

// package
import Link from "next/link";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Text from "@/ui/text";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/ui/assets/svg";

// hooks
import { useRootContext } from "@/hooks/rootContext";

// lib
import { cn } from "@/lib/utils";

const Footer = () => {
  const isRootPage = useRootContext();

  // Match navbar palette:
  // - Home page: Analhorology yellow
  // - Other pages: soft off-white (not stark white)
  const bgClass = isRootPage ? "bg-[#ffc95c]" : "bg-neutral-100";
  const borderClass = isRootPage ? "border-black/10" : "border-black/10";
  const primaryText = "text-neutral-900";
  const secondaryText = "text-neutral-700";

  return (
    <SectionLayout bg={bgClass}>
      <footer className={cn("px-8 py-12 lg:py-14", primaryText)}>
        {/* Top row */}
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Brand + tagline */}
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-6">
            <h3 className={cn("font-poppins text-2xl font-medium", primaryText)}>
              Analhorology<span className={cn("ml-0.5", secondaryText)}>.</span>
            </h3>
            <span className={cn("h-[1px] w-8 rounded-full lg:hidden", secondaryText)} />
            
          </div>

          {/* Nav links */}
          <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
            <li className="font-inter text-sm">
              <Link href="/" className="hover:opacity-80">Home</Link>
            </li>
            <li className="font-inter text-sm">
              <Link href="/shop" className="hover:opacity-80">Shop</Link>
            </li>
            <li className="font-inter text-sm">
              <Link href="/about" className="hover:opacity-80">About</Link>
            </li>
            
          </ul>
        </div>

        {/* Divider */}
        <div className={cn("mx-auto mt-10 max-w-[1440px] border-t", borderClass)} />

        {/* Bottom row */}
        <div className="mx-auto mt-6 flex max-w-[1440px] flex-col-reverse gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          {/* Left: legal */}
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <Text family="poppins" size="xs" className={cn("text-center lg:text-left", secondaryText)}>
              © {new Date().getFullYear()} Analhorology. All rights reserved.
            </Text>
            
          </div>

          
        </div>
      </footer>
    </SectionLayout>
  );
};

export default Footer;
