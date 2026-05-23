"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">

        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-black text-white md:text-2xl"
        >
          GP WORLD CUP
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 text-sm font-semibold uppercase text-zinc-300 md:flex">
          <Link href="/">Home</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/ranking">Ranking</Link>
          <Link href="/calendar">Calendar</Link>
          <Link href="/news">News</Link>
          <Link href="/social">Social</Link>
        </div>

        {/* STORE BUTTON DESKTOP */}
        <Link
          href="/store"
          className="hidden rounded-xl bg-red-600 px-5 py-3 text-sm font-bold uppercase transition hover:bg-red-500 md:block"
        >
          GPWC Store
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center text-white md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 md:hidden">

          <div className="flex flex-col gap-6 text-lg font-semibold uppercase text-white">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/teams" onClick={() => setOpen(false)}>
              Teams
            </Link>

            <Link href="/ranking" onClick={() => setOpen(false)}>
              Ranking
            </Link>

            <Link href="/calendar" onClick={() => setOpen(false)}>
              Calendar
            </Link>

            <Link href="/news" onClick={() => setOpen(false)}>
              News
            </Link>

            <Link href="/social" onClick={() => setOpen(false)}>
              Social
            </Link>

            <Link
              href="/store"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-xl bg-red-600 px-5 py-4 text-center text-sm font-bold uppercase transition hover:bg-red-500"
            >
              GPWC Store
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}