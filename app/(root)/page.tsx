// package
import Link from "next/link";
import Image from "next/image";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Button from "@/ui/button";
import Heading from "@/ui/head";
import Text from "@/ui/text";
import {
  ArrowRightIcon,
  CallIcon,
  DeliveryIcon,
  LockIcon,
  MoneyIcon,
} from "@/ui/assets/svg";

const WHATSAPP_NUMBER = "2349035350139"; // Founder (Alhaji Olayiwola Ajagunjeun)
const VISIT_MSG = encodeURIComponent(
  "hello, I would love to visit the Analhorology store in Lagos."
);
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${VISIT_MSG}`;


export default function Home() {
  return (
    <>
      
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/screen.png" // lightweight snapshot
          className="absolute top-0 left-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/herrr.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <Heading
            as="h1"
            intent="hero-section"
            className="text-[#ffc95c]" // yellow headline
          >
            Your time starts now
          </Heading>

          <Text className="mt-4 max-w-lg text-lg md:text-xl text-[#ffc95c]">
            Discover timeless luxury watches designed for you.
          </Text>

          <Button
            fontSize="sm"
            className="mt-6 px-10 py-3 md:text-lg bg-white text-black hover:bg-gray-200"
          >
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Intro copy — craftsmanship + trust */}
      <SectionLayout>
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
          <div className="rounded-3xl bg-gradient-to-br from-black via-neutral-900 to-neutral-800 p-[1px]">
            <div className="rounded-3xl bg-neutral-950/60 px-6 py-10 md:px-10 md:py-14 backdrop-blur">
              <Text
                size="xs"
                transform="uppercase"
                weight={700}
                className="tracking-widest text-[#ffc95c]"
              >
                crafted for connoisseurs
              </Text>
              <Heading
                as="h2"
                intent="base-section"
                className="mt-3 text-center md:text-left text-white"
              >
                Precision, heritage, and a touch of gold.
              </Heading>
              <Text className="mt-4 max-w-3xl text-gray-300">
                At Analhorology, every second is a statement. From tool watches
                to dress pieces, we curate timekeepers that balance Swiss
                precision with modern Nigerian elegance. Explore enduring
                references, limited releases, and daily drivers—all vetted for
                craftsmanship, performance, and style.
              </Text>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                
                <Link href="/about-us" className="group inline-flex items-center">
                  <span className="border-b border-[#ffc95c] text-[#ffc95c] group-hover:opacity-80">
                    Learn about us
                  </span>
                  <ArrowRightIcon className="ml-2 h-4 w-4" stroke="#ffc95c" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Reimagined Shop Collection — all tiles link to /shop */}
      <SectionLayout>
        <div className="space-y-4 px-6 py-10 sm:space-y-8 md:space-y-12">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            Shop Collection
          </Heading>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Divers */}
            <Link
              href="/shop"
              className="group relative overflow-hidden rounded-3xl bg-neutral-900"
            >
              {/* subtle grid shine */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,201,92,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_30%)]" />
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/z.jpg"
                  alt="Dive watch collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={false}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="rounded-2xl bg-black/60 px-5 py-4 backdrop-blur-md ring-1 ring-white/5">
                  <Text
                    size="xs"
                    transform="uppercase"
                    className="tracking-widest text-[#ffc95c]"
                    weight={700}
                  >
                    saltwater ready
                  </Text>
                 
                  <span className="mt-2 inline-flex items-center gap-1 border-b border-[#ffc95c] text-[#ffc95c]">
                    View collection <ArrowRightIcon className="h-4 w-4" stroke="#ffc95c" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Dress */}
            <Link
              href="/shop"
              className="group relative overflow-hidden rounded-3xl bg-neutral-900"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,201,92,0.10),transparent_40%)]" />
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/zzz.jpg"
                  alt="Dress watch collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="rounded-2xl bg-black/60 px-5 py-4 backdrop-blur-md ring-1 ring-white/5">
                  <Text
                    size="xs"
                    transform="uppercase"
                    className="tracking-widest text-[#ffc95c]"
                    weight={700}
                  >
                    black tie approved
                  </Text>
                  
                  <span className="mt-2 inline-flex items-center gap-1 border-b border-[#ffc95c] text-[#ffc95c]">
                    View collection <ArrowRightIcon className="h-4 w-4" stroke="#ffc95c" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Everyday / Field */}
            <Link
              href="/shop"
              className="group relative overflow-hidden rounded-3xl bg-neutral-900 sm:col-span-2 lg:col-span-1"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_100%_at_100%_0%,rgba(255,201,92,0.12),transparent_40%)]" />
              <div className="relative aspect-[7/5] sm:aspect-[4/5]">
                <Image
                  src="/images/nnl.jpg"
                  alt="Field & everyday watch collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 33vw"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="rounded-2xl bg-black/60 px-5 py-4 backdrop-blur-md ring-1 ring-white/5">
                  <Text
                    size="xs"
                    transform="uppercase"
                    className="tracking-widest text-[#ffc95c]"
                    weight={700}
                  >
                    rugged & refined
                  </Text>
                  
                  <span className="mt-2 inline-flex items-center gap-1 border-b border-[#ffc95c] text-[#ffc95c]">
                    View collection <ArrowRightIcon className="h-4 w-4" stroke="#ffc95c" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </SectionLayout>

      {/* Brand Story — with /about link */}
      <SectionLayout>
        <div className="px-6 py-12 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Text size="xs" transform="uppercase" weight={700} className="tracking-widest text-[#ffc95c]">
                our heritage
              </Text>
              <Heading as="h2" intent="base-section" className="mt-2">
                Analhorology, since 1990.
              </Heading>
              <Text className="mt-4 text-gray-600">
                A proud subsidiary of Ajagun Nigeria and Associates Limited,
                Analhorology began its journey in 1990, partnering with storied
                names like Nivada, Cadino, and advancing with{" "}
                Century Times. Our Lagos, Nigeria office anchors a decades-long
                commitment to authentic watchmaking, trusted service, and exceptional value.
              </Text>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/about-us">
                  <Button className="bg-black text-white ring-1 ring-white/10 hover:bg-neutral-900">
                    Read our story
                  </Button>
                </Link>
                
              </div>
            </div>

            {/* Visual: reimagined container */}
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-black p-[1px] shadow-2xl">
                <div className="relative rounded-3xl bg-neutral-950/60">
                  <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#ffc95c]/10 blur-3xl" />
                  <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
                  <Image
                    src="/images/anal.jpeg"
                    width={1250}
                    height={1080}
                    alt="Analhorology studio imagery"
                    className="relative block w-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Care & Services — image beside text, no bg colors */}
<div className="grid items-center gap-8 px-6 py-10 md:grid-cols-2">
  {/* Plain image (no bg wrapper) */}
  <div className="w-full">
    <Image
      src="/images/visit.jpg"
      width={1250}
      height={1080}
      alt="Analhorology store & watch care"
      className="h-auto w-full object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>

  {/* Text content */}
  <div className="w-full">
    <div className="space-y-3">
      <Text weight={700} transform="uppercase" className="text-neutral-800">
        care & services
      </Text>
      <Heading as="h2" intent="base-section">
        Visit our store in Lagos.
      </Heading>
      <Text size="sm" className="text-neutral-700">
        Enjoy complimentary sizing and personalized guidance. Our team will help you choose,
        fit, and care for your watch—with clear, reliable after-sales support.
      </Text>
    </div>

    <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
      {[
        "Complimentary sizing & bracelet adjustment",
        "Strap fitting & style advice",
        "Authenticity checks & service coordination",
        "Water-resistance (pressure-test) coordination",
        "Sourcing on request & trade-in guidance",
        "Corporate gifting & bulk orders",
      ].map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ffc95c]" />
          <Text size="sm" className="text-neutral-800">
            {item}
          </Text>
        </li>
      ))}
    </ul>

    <div className="mt-6 flex flex-wrap items-center gap-3">
      <a href={waLink} target="_blank" rel="noopener noreferrer">
        <Button className="bg-black text-white hover:bg-neutral-800">Plan a visit</Button>
      </a>
      
    </div>
  </div>
</div>




      {/* Service highlights */}
      <SectionLayout>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 p-8 md:grid-cols-4 lg:gap-6 lg:py-10">
          <div className="space-y-4 rounded-2xl bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <DeliveryIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text size="sm" weight={600} family="poppins" color="black/800" className="lg:text-xl">
                Free Shipping
              </Text>
              <Text size="sm" color="gray">
                Orders above threshold
              </Text>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <MoneyIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text size="sm" weight={600} family="poppins" color="black/800" className="lg:text-xl">
                Money‑back
              </Text>
              <Text size="sm" color="gray">
                30‑day guarantee
              </Text>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <LockIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text size="sm" weight={600} family="poppins" color="black/800" className="lg:text-xl">
                Secure Payments
              </Text>
              <Text size="sm" color="gray">
                Secured by Stripe/Paystack
              </Text>
            </div>
          </div>
          <div className="space-y-4 rounded-2xl bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <CallIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text size="sm" weight={600} family="poppins" color="black/800" className="lg:text-xl">
                24/7 Support
              </Text>
              <Text size="sm" color="gray">
                Phone & email
              </Text>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Social / Newsfeed */}
      <SectionLayout>
        <div className="space-y-10 px-8 py-12">
          <div className="space-y-4 text-center">
            <Text weight={700} transform="uppercase" color="gray">
              newsfeed
            </Text>
            <Heading as="h2" intent="base-section">
              Instagram
            </Heading>
            <Text size="sm">
              Follow us for drops, care tips & behind‑the‑scenes.
            </Text>
            <Text size="xl" weight={500} family="poppins" className="text-[#ffc95c]">
              @analhorology
            </Text>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
