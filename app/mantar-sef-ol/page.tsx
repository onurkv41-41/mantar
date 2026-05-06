import Link from "next/link";
import MantarLogo from "@/components/MantarLogo";

export const metadata = {
  title: "Mantar Şef Ol — Mantar",
  description: "Mantar topluluğuna şef olarak katıl.",
};

export default function MantarSefOlPage() {
  return (
    <div className="min-h-screen bg-mantar-cream">
      <header className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 py-5 sm:py-7">
          <Link href="/" className="inline-block">
            <MantarLogo width={100} className="sm:hidden" />
            <MantarLogo width={124} className="hidden sm:block" />
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[720px] px-4 sm:px-8 py-12 text-center">
        <h1 className="font-display text-[28px] sm:text-[36px] font-bold tracking-[-0.01em]">
          Mantar Şef Ol
        </h1>
        <p className="mt-4 text-[15px] text-mantar-muted">
          Form yakında burada — içerik hazırlanıyor.
        </p>
      </main>
    </div>
  );
}
