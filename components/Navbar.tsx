"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">

        <Link href="/" className="text-2xl font-black text-white">
          GP WORLD CUP
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-semibold uppercase text-zinc-300">
          <Link href="/">Home</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/ranking">Ranking</Link>
          <Link href="/calendar">Calendar</Link>
          <Link href="/news">News</Link>
          <Link href="/social">Social</Link>
        </div>

        <a
  href="/store"
  className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold uppercase transition hover:bg-red-500"
>
  GPWC Store
</a>

      </div>
    </nav>
  );
}