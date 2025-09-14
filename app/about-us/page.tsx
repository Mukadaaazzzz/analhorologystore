"use client";
import Link from "next/link";
import SectionLayout from "@/layouts/sectionLayout";
import Heading from "@/ui/head";
import Text from "@/ui/text";
import Button from "@/ui/button";
import { useEffect } from "react";

export default function About() {
  // Ensure the header looks like the Home page (transparent over dark)
  useEffect(() => {
    document.documentElement.classList.add('header-transparent');
    return () => document.documentElement.classList.remove('header-transparent');
  }, []);
  return (
    <>
      {/* Page Header */}
      <section data-header-variant="transparent" className="relative isolate overflow-hidden bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Text
              size="xs"
              transform="uppercase"
              weight={700}
              className="tracking-widest text-[#ffc95c]"
            >
              About Analhorology
            </Text>
            <Heading as="h1" intent="base-section" className="mt-3 text-white">
              Time well kept since 1991
            </Heading>
            <Text className="mt-4 text-gray-300">
              Analhorology is a subsidiary of <span className="text-[#ffc95c]">Ajagun Nigeria and Associates Limited</span>.
              From our early partnerships with <span className="text-[#ffc95c]">Nivada</span> and <span className="text-[#ffc95c]">Cadino</span>, to our work
              with <span className="text-[#ffc95c]">Century Times</span> in Switzerland, our journey blends international
              expertise with modern Nigerian elegance.
            </Text>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/shop">
                <Button className="bg-[#ffc95c] text-black hover:bg-[#ffd985]">Browse our watches</Button>
              </Link>
              <Link href="/contact" className="group inline-flex items-center">
                <span className="border-b border-[#ffc95c] text-[#ffc95c] group-hover:opacity-80">Contact us</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,201,92,0.12),transparent_60%)]" />
      </section>

      {/* Who we are */}
      <SectionLayout>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
          <div className="space-y-4">
            <Text size="xs" transform="uppercase" weight={700} className="tracking-widest text-[#ffc95c]">
              Who we are
            </Text>
            <Heading as="h2" intent="base-section">Craft, credibility, and care.</Heading>
            <Text className="text-gray-600">
              Founded in <span className="text-[#ffc95c]">1991</span>, Analhorology curates, services, and supports
              timepieces that stand the test of time. We champion authenticity,
              clear provenance, and attentive aftercare—values shaped by decades
              of collaboration across continents.
            </Text>
            <Text className="text-gray-600">
              As a proud subsidiary of Ajagun Nigeria and Associates Limited,
              our mission is simple: connect enthusiasts and first‑time buyers
              alike with watches that feel personal, perform reliably, and hold
              their value.
            </Text>
          </div>

          {/* Quick facts */}
          <div className="grid gap-4 md:gap-6">
            <div className="rounded-2xl border border-white/10 bg-neutral-100 p-6">
              <Text weight={700}>Heritage</Text>
              <Text className="mt-2 text-gray-700">
                Started in 1991 • Worked with Nivada & Cadino • Evolved with Century Times (Switzerland)
              </Text>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-100 p-6">
              <Text weight={700}>Locations</Text>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>
                  <span className="mr-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-700">Relocated</span>
                  Former office: No. 2 George Street, Akpongbon, Lagos (cancelled)
                </li>
                <li>
                  <span className="mr-2 rounded-full bg-[#ffc95c]/30 px-2 py-0.5 text-xs text-black">Now open</span>
                  New store: Victoria Island, Lagos, Nigeria
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-100 p-6">
              <Text weight={700}>What we do</Text>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                <li>Curated retail of new and select pre‑owned watches</li>
                <li>Authenticity checks, servicing coordination & aftercare</li>
                <li>Sourcing on request for hard‑to‑find references</li>
                <li>Education for new collectors and corporate gifting</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Timeline */}
      <SectionLayout>
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Text size="xs" transform="uppercase" weight={700} className="tracking-widest text-[#ffc95c]">
            Our heritage
          </Text>
          <Heading as="h2" intent="base-section" className="mt-2">From Lagos beginnings to Swiss collaborations</Heading>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="relative border-l border-gray-200 pl-6">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#ffc95c]" />
              <Text weight={700}>1991 — The beginning</Text>
              <Text className="text-gray-600">Analhorology is founded in Lagos, Nigeria, under the parent company Ajagun Nigeria and Associates Limited.</Text>
            </div>
            <div className="relative border-l border-gray-200 pl-6">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#ffc95c]" />
              <Text weight={700}>1990s — Partnership era</Text>
              <Text className="text-gray-600">Work begins with brands including Nivada and Cadino, building deep category expertise and a trusted supply network.</Text>
            </div>
            <div className="relative border-l border-gray-200 pl-6">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#ffc95c]" />
              <Text weight={700}>2000s — Swiss alignment</Text>
              <Text className="text-gray-600">Collaboration extends to Century Times in Switzerland, reinforcing our quality standards and aftercare practices.</Text>
            </div>
            <div className="relative border-l border-gray-200 pl-6">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#ffc95c]" />
              <Text weight={700}>Today — Victoria Island</Text>
              <Text className="text-gray-600">Operations relocate from the former Akpongbon office to a customer‑centric store in Victoria Island, Lagos.</Text>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Leadership & People */}
      <SectionLayout>
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Text size="xs" transform="uppercase" weight={700} className="tracking-widest text-[#ffc95c]">
            Our people
          </Text>
          <Heading as="h2" intent="base-section" className="mt-2">Leadership that keeps perfect time</Heading>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-neutral-100 p-6 shadow-sm">
              <Text weight={700} className="text-black">Alhaji Olayiwola Ajagunjeun</Text>
              <Text className="text-sm text-gray-600">Chief Executive Officer & Founder</Text>
              <Text className="mt-3 text-gray-700">
                Visionary collector and industry advocate. Leads brand partnerships,
                strategic curation, and customer experience.
              </Text>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-100 p-6 shadow-sm">
              <Text weight={700} className="text-black">Barrister Adeniyi Lawal</Text>
              <Text className="text-sm text-gray-600">Head of Operations & Legal Practitioner</Text>
              <Text className="mt-3 text-gray-700">
                Oversees day‑to‑day operations, vendor governance, compliance, and
                contracts—ensuring seamless service and rigorous standards.
              </Text>
            </div>
          </div>

          {/* Directors */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-neutral-100 p-6">
            <Text weight={700}>Board of Directors</Text>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-xl bg-neutral-100 p-4 shadow-sm">
                <Text weight={600}>Kabirudeen Ajagun</Text>
                <Text className="text-sm text-gray-600">Nigeria</Text>
              </div>
              <div className="rounded-xl bg-neutral-100 p-4 shadow-sm">
                <Text weight={600}>Aminat Ajagun</Text>
                <Text className="text-sm text-gray-600">Canada</Text>
              </div>
              <div className="rounded-xl bg-neutral-100 p-4 shadow-sm">
                <Text weight={600}>Farouq Ajagun</Text>
                <Text className="text-sm text-gray-600">Dublin</Text>
              </div>
              <div className="rounded-xl bg-neutral-100 p-4 shadow-sm">
                <Text weight={600}>Faridat Ajagun</Text>
                <Text className="text-sm text-gray-600">Nigeria</Text>
              </div>
            </div>
          </div>

          {/* Technology lead */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-100 p-6">
            <Text weight={700}>Technology</Text>
            <div className="mt-4 rounded-xl bg-neutral-100 p-4 shadow-sm">
              <Text weight={600}>Taofeeq Mukadaz</Text>
              <Text className="text-sm text-gray-600">Head of IT & Software — Nigeria</Text>
              <Text className="mt-2 text-gray-700">
                Drives digital storefront, infrastructure, and data integrity—ensuring
                a fast, secure, and modern shopping experience.
              </Text>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Commitments */}
      <SectionLayout>
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Text size="xs" transform="uppercase" weight={700} className="tracking-widest text-[#ffc95c]">
            Our promise
          </Text>
          <Heading as="h2" intent="base-section" className="mt-2">What you can expect from us</Heading>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-neutral-100 p-6 shadow-sm ring-1 ring-gray-200">
              <Text weight={700}>Authenticity</Text>
              <Text className="mt-2 text-gray-700">Every timepiece is vetted for origin, specification, and condition. No compromises.</Text>
            </div>
            <div className="rounded-2xl bg-neutral-100 p-6 shadow-sm ring-1 ring-gray-200">
              <Text weight={700}>Aftercare</Text>
              <Text className="mt-2 text-gray-700">Service guidance, strap fitting, pressure‑testing coordination, and maintenance reminders.</Text>
            </div>
            <div className="rounded-2xl bg-neutral-100 p-6 shadow-sm ring-1 ring-gray-200">
              <Text weight={700}>Transparency</Text>
              <Text className="mt-2 text-gray-700">Clear pricing, clear timelines, and clear communication—before and after purchase.</Text>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Visit Us */}
      <SectionLayout>
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Text size="xs" transform="uppercase" weight={700} className="tracking-widest text-[#ffc95c]">
            Visit us
          </Text>
          <Heading as="h2" intent="base-section" className="mt-2">Our store</Heading>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-neutral-100 p-6">
              <Text weight={700}>Victoria Island, Lagos</Text>
              <Text className="mt-2 text-gray-700">
                Our new flagship store is designed for hands‑on discovery—calm lighting,
                secure viewing trays, and expert guidance.
              </Text>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/shop"><Button className="bg-black text-white hover:bg-neutral-800">Explore the catalog</Button></Link>
                <Link href="/contact" className="group inline-flex items-center">
                  <span className="border-b border-[#ffc95c] text-[#ffc95c] group-hover:opacity-80">Plan a visit</span>
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-neutral-100 p-6">
              <Text weight={700}>Former location (closed)</Text>
              <Text className="mt-2 text-gray-700">No. 2 George Street, Akpongbon, Lagos — cancelled / relocated.</Text>
              <Text className="mt-2 text-gray-600">Please visit our Victoria Island store instead.</Text>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Contact */}
      <SectionLayout>
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:py-16">
          <div className="rounded-3xl bg-gradient-to-br from-black via-neutral-900 to-neutral-800 p-[1px]">
            <div className="rounded-3xl bg-neutral-950/70 px-6 py-10 md:px-10 md:py-14 backdrop-blur">
              <Text size="xs" transform="uppercase" weight={700} className="tracking-widest text-[#ffc95c]">Contact us</Text>
              <Heading as="h2" intent="base-section" className="mt-2 text-white">We’re here to help</Heading>
              <Text className="mt-4 max-w-3xl text-gray-300">
                Have a question about a model, sizing, or aftercare? Reach out and our team will respond promptly.
              </Text>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a href="mailto:alhajiolayiwola56@gmail.com" className="rounded-2xl bg-neutral-100 p-6 shadow-sm transition hover:shadow-md">
                  <Text weight={700} className="text-black">Email</Text>
                  <Text className="mt-1 text-gray-700">alhajiolayiwola56@gmail.com</Text>
                </a>
                <a href="tel:+2349035350139" className="rounded-2xl bg-neutral-100 p-6 shadow-sm transition hover:shadow-md">
                  <Text weight={700} className="text-black">Phone</Text>
                  <Text className="mt-1 text-gray-700">+234 903 535 0139</Text>
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/about" className="group inline-flex items-center">
                  <span className="border-b border-[#ffc95c] text-[#ffc95c] group-hover:opacity-80">More about Analhorology</span>
                </Link>
                <Link href="/shop"><Button className="bg-[#ffc95c] text-black hover:bg-[#ffd985]">Shop now</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      
    </>
  );
}
