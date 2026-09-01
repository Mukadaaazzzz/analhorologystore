import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/newlogo.png"
        alt="Analhorology logo"
        width={220}
        height={90}
        priority
        className="h-auto w-auto max-h-8 object-contain sm:max-h-10 lg:max-h-[52px]"
      />
    </div>
  );
}
