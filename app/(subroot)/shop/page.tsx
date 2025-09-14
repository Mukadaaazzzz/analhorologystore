"use client";

/* packages */
import { ChevronDown } from "lucide-react";

/* layouts */
import SectionLayout from "@/layouts/sectionLayout";

/* ui */
import Text from "@/ui/text";
import Heading from "@/ui/head";
import { DropdownIcon } from "@/ui/assets/svg";
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";

/* lib */
import { cn } from "@/lib/utils";

/* ---- Century collections (official families) ---- */
const centuryCollections = [
  { value: "prime-time", text: "Prime Time (Square / Sapphire)" },
  { value: "affinity", text: "Affinity (Everyday Elegance)" },
  { value: "elegance", text: "Elegance & Moonphase" },
  { value: "first-class", text: "First Class (Dress)" },
  { value: "tiara", text: "Tiara (Jewelled Silhouette)" },
  { value: "leela-blossom", text: "Leela Blossom (Cocktail)" },
  { value: "dragon-stone", text: "Dragon Stone" },
  { value: "virtuoso", text: "Virtuoso" },
  { value: "l-avenue", text: "L’Avenue" },
  { value: "affinity-rectangular", text: "Affinity Rectangular" },
];

const prices = [
  { value: "all-price", text: "All Prices" },
  { value: "0-500k", text: "₦0 – ₦500k" },
  { value: "500k-1m", text: "₦500k – ₦1m" },
  { value: "1m-3m", text: "₦1m – ₦3m" },
  { value: "3m-plus", text: "₦3m+" },
];

const sorts = [
  { value: "relevance", text: "Relevance" },
  { value: "price-low-to-high", text: "Price Low to High" },
  { value: "price-high-to-low", text: "Price High to Low" },
  { value: "newest", text: "Newest" },
  { value: "most-viewed", text: "Most Viewed" },
];

/* WhatsApp concierge */
const WHATSAPP_NUMBER = "2349035350139";
const VISIT_MSG = encodeURIComponent(
  "hello, I’d love help sourcing a CENTURY watch at Analhorology."
);
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${VISIT_MSG}`;

export default function Page() {
  return (
    <SectionLayout>
      <div className="px-8">
        {/* HERO / Breadcrumb (text-only, luxe) */}
        <div className="relative flex h-[260px] flex-col items-center justify-center gap-3 rounded-3xl bg-neutral-100 text-center md:h-[300px]">
          <div className="flex items-center gap-4">
            <Text size="sm" color="gray" weight={500} className="flex items-center gap-1">
              Home <DropdownIcon stroke="#6C7275" className="h-3 w-3 -rotate-90" />
            </Text>
            <Text size="sm" weight={600}>Shop</Text>
          </div>

          <Heading as="h1" intent="shop-page" className="tracking-tight">
            Shop at Analhorology
          </Heading>
          <Text className="max-w-2xl text-sm md:text-base text-gray-600">
            Iconic Swiss timepieces sculpted in <span className="text-[#ffc95c]">CENTURY sapphire</span>.
            Explore our collection directory and request sourcing via concierge.
          </Text>
        </div>

        {/* FILTER BAR (functional UI even without inventory) */}
        <div className="grid gap-8 py-8 lg:grid-cols-[2fr_1fr_2fr] lg:items-end lg:gap-4">
          {/* Filters */}
          <div className="flex flex-col gap-6 md:flex-row lg:col-span-1 lg:items-center lg:gap-4">
            {/* categories */}
            <div className="w-full space-y-2">
              <Text size="sm" weight={600} color="gray" transform="uppercase">
                collection
              </Text>

              <Select defaultValue={centuryCollections[0].value}>
                <SelectTrigger
                  className={cn(
                    "group h-auto rounded-lg border-2 border-[#6C7275] p-2 pl-4",
                    "font-inter font-semibold text-sm text-[#141718] focus:ring-0 focus:ring-offset-0",
                  )}
                >
                  <SelectValue />
                  <SelectIcon asChild>
                    <ChevronDown
                      color="#6C7275"
                      className="h-6 w-6 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
                  </SelectIcon>
                </SelectTrigger>

                <SelectContent className="rounded-xl">
                  {centuryCollections.map((c) => (
                    <SelectItem
                      key={c.value}
                      value={c.value}
                      className={cn(
                        "cursor-pointer rounded-lg p-2 font-inter text-sm text-[#6C7275]",
                        "focus:bg-[#F3F5F7] focus:text-[#141718]",
                        "data-[state=checked]:font-semibold data-[state=checked]:text-[#141718]"
                      )}
                    >
                      {c.text}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* price */}
            <div className="w-full space-y-2">
              <Text size="sm" weight={600} color="gray" transform="uppercase">
                price
              </Text>

              <Select defaultValue={prices[0].value}>
                <SelectTrigger
                  className={cn(
                    "group h-auto rounded-lg border-2 border-[#6C7275] p-2 pl-4",
                    "font-inter font-semibold text-sm text-[#141718] focus:ring-0 focus:ring-offset-0",
                  )}
                >
                  <SelectValue />
                  <SelectIcon asChild>
                    <ChevronDown
                      color="#6C7275"
                      className="h-6 w-6 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    />
                  </SelectIcon>
                </SelectTrigger>

                <SelectContent className="rounded-xl">
                  {prices.map((p) => (
                    <SelectItem
                      key={p.value}
                      value={p.value}
                      className={cn(
                        "cursor-pointer rounded-lg p-2 font-inter text-sm text-[#6C7275]",
                        "focus:bg-[#F3F5F7] focus:text-[#141718]",
                        "data-[state=checked]:font-semibold data-[state=checked]:text-[#141718]"
                      )}
                    >
                      {p.text}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Sort + concierge CTA */}
          <div className="flex items-center justify-between border-y border-[#EAEAEA] py-2 lg:col-start-3 lg:justify-end lg:gap-6 lg:border-y-0 lg:py-0">
            <Select>
              <SelectTrigger
                className={cn(
                  "group h-auto p-0 gap-1 max-w-[120px] md:max-w-[150px] justify-start lg:justify-end",
                  "border-none outline-none font-inter font-semibold text-sm text-[#121212] focus:ring-0 focus:ring-offset-0",
                )}
              >
                <SelectValue placeholder="sort by" />
                <SelectIcon asChild>
                  <ChevronDown
                    color="#121212"
                    className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
                </SelectIcon>
              </SelectTrigger>

              <SelectContent className="w-[220px] rounded-xl">
                {sorts.map((sort) => (
                  <SelectItem
                    key={sort.value}
                    value={sort.value}
                    className={cn(
                      "cursor-pointer rounded-lg p-2 font-inter text-sm text-[#6C7275]",
                      "focus:bg-[#F3F5F7] focus:text-[#141718]",
                      "data-[state=checked]:font-semibold data-[state=checked]:text-[#141718]"
                    )}
                  >
                    {sort.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-[#ffc95c] px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              WhatsApp a Concierge
            </a>
          </div>
        </div>

        {/* COLLECTION DIRECTORY — text-first, no images */}
        <div className="space-y-8 pb-12">
          <Heading as="h2" intent="base-section">Collection Directory</Heading>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Prime Time",
                tag: "Square • Sapphire",
                copy:
                  "Bold, modern silhouette featuring CENTURY’s signature sapphire architecture—statement pieces for men and women.",
              },
              {
                title: "Affinity",
                tag: "Everyday Elegance",
                copy:
                  "Classic but never ordinary. Discreet luxury you can enjoy daily—timeless lines, effortless wear.",
              },
              {
                title: "Elegance / Moonphase",
                tag: "Poise • Complication",
                copy:
                  "Graceful proportions with refined details—select references add romantic moonphase displays.",
              },
              {
                title: "First Class",
                tag: "Dress",
                copy:
                  "Understated, luminous dress watches with hand-cut sapphire cases and fluent bracelets.",
              },
              {
                title: "Tiara",
                tag: "Jewelled Silhouette",
                copy:
                  "Sculptural faceted sapphire that plays with light—cocktail pieces with a couture spirit.",
              },
              {
                title: "Leela Blossom",
                tag: "Cocktail",
                copy:
                  "Floral inspirations rendered in sapphire and metal—delicate yet striking.",
              },
              {
                title: "Dragon Stone",
                tag: "Character • Facets",
                copy:
                  "Expressive faceting and strong lines—distinctive presence on the wrist.",
              },
              {
                title: "Virtuoso",
                tag: "Artful Mechanics",
                copy:
                  "Technical artistry meets sapphire geometry—centred on mechanical expression.",
              },
              {
                title: "L’Avenue & Affinity Rectangular",
                tag: "Rectangular",
                copy:
                  "Elongated forms with jewellery cues—elegant, city-ready silhouettes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-black/10 bg-white p-5 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Text weight={700} className="text-black">{item.title}</Text>
                    <span className="mt-1 inline-block rounded-full bg-[#fff2cc] px-2 py-0.5 text-xs text-neutral-800">
                      {item.tag}
                    </span>
                  </div>
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#ffc95c]" />
                </div>
                <Text className="mt-3 text-sm text-neutral-700">{item.copy}</Text>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold hover:bg-neutral-100"
                  >
                    Request sourcing
                  </a>
                  <a
                    href="mailto:alhajiolayiwola56@gmail.com?subject=Reserve%20a%20CENTURY%20collection"
                    className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold hover:bg-neutral-100"
                  >
                    Reserve by email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SIZE & STYLE GUIDE — text modules */}
        <div className="space-y-8 pb-12">
          <Heading as="h2" intent="base-section">Size & Style Guide</Heading>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <Text weight={700}>Case Shapes</Text>
              <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                <li>Square (Prime Time) for a contemporary, architectural look.</li>
                <li>Round (Elegance/First Class) for classic dress appeal.</li>
                <li>Rectangular (L’Avenue/Affinity Rectangular) for a refined, jewellery vibe.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <Text weight={700}>Materials</Text>
              <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                <li>CENTURY sapphire: hand-cut, faceted, exceptionally scratch-resistant.</li>
                <li>Steel or gold-tone cases/bracelets; leather straps for dress options.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <Text weight={700}>When to Wear</Text>
              <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
                <li>Daily: Affinity, Prime Time on steel.</li>
                <li>Formal: First Class, Elegance / Moonphase.</li>
                <li>Occasion: Tiara, Leela Blossom (cocktail/evening).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SERVICES & PROMISE (trust without inventory) */}
        <div className="space-y-6 pb-12">
          <Heading as="h2" intent="base-section">Our Promise</Heading>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <Text weight={700}>Authenticity</Text>
              <Text className="mt-1 text-sm text-neutral-700">
                Every CENTURY timepiece is sourced through trusted channels and verified for origin and spec.
              </Text>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <Text weight={700}>Care & After-Sales</Text>
              <Text className="mt-1 text-sm text-neutral-700">
                Complimentary sizing, strap fitting, and service coordination from our Victoria Island store.
              </Text>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <Text weight={700}>Concierge Sourcing</Text>
              <Text className="mt-1 text-sm text-neutral-700">
                Looking for a specific reference? Chat our concierge for options and timelines.
              </Text>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800">
              Chat now on WhatsApp
            </a>
            <a href="mailto:alhajiolayiwola56@gmail.com?subject=CENTURY%20watch%20sourcing%20request" className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold hover:bg-neutral-100">
              Email sourcing request
            </a>
          </div>
        </div>

        {/* FAQ — keeps the page dense & helpful */}
        <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 mb-14">
          <Heading as="h3" intent="base-section" className="text-lg">FAQ</Heading>
          <div className="mt-4 space-y-3">
            <details className="rounded-lg bg-white p-4">
              <summary className="cursor-pointer font-semibold">What makes CENTURY different?</summary>
              <Text className="mt-2 text-sm text-neutral-700">
                The brand is renowned for its <span className="text-[#ffc95c]">hand-cut, faceted sapphire</span> watch cases—an exclusive signature that delivers distinctive light play and durability.
              </Text>
            </details>
            <details className="rounded-lg bg-white p-4">
              <summary className="cursor-pointer font-semibold">Do you have stock in-store?</summary>
              <Text className="mt-2 text-sm text-neutral-700">
                We’re curating arrivals. In the meantime, we can reserve references for you or source to order via our concierge.
              </Text>
            </details>
            <details className="rounded-lg bg-white p-4">
              <summary className="cursor-pointer font-semibold">Can I try sizes and straps?</summary>
              <Text className="mt-2 text-sm text-neutral-700">
                Yes—visit our Victoria Island store for sizing, strap swaps, and guidance on fit and wear.
              </Text>
            </details>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
