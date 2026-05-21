export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-8 text-zinc-500">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm md:flex-row">

        <div>
          © 2026 GP World Cup — All rights reserved
        </div>

        <a
          href="/regulations"
          className="transition hover:text-white"
        >
          Terms & Conditions
        </a>

      </div>

    </footer>
  );
}