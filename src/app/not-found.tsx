import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="hero relative flex min-h-[70vh] items-center px-6 py-28">
      <div className="hero-grid" />
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="max-w-2xl">
          <p className="eyebrow">404 / Page not found</p>
          <h1
            className="mt-6 text-5xl font-normal leading-none tracking-[-0.08em] md:text-7xl lg:text-[8rem]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Lost in the <em className="text-[#c7f36b] not-italic">system</em>.
          </h1>
          <p className="hero-lede mt-6 max-w-xl">
            The page you were looking for isn&apos;t here. Maybe it drifted, was
            renamed, or never existed in the first place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="button-solid">
              Back home
            </Link>
            <Link href="/#contact" className="button-line">
              Contact me <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
