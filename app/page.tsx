"use client";
import {
  Trophy,
  Globe,
  Flag,
  Camera,
  Play,
  Shield,
} from "lucide-react";

import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function GPWorldCupHomepage() {
const countries = [
  {
    name: "Spain",
    flag: "/images/flags/spain.png",
  },
  {
    name: "Italy",
    flag: "/images/flags/italy.png",
  },
  {
    name: "France",
    flag: "/images/flags/france.png",
  },
  {
    name: "United Kingdom",
    flag: "/images/flags/uk.png",
  },
  {
    name: "Japan",
    flag: "/images/flags/japan.png",
  },
  {
    name: "Australia",
    flag: "/images/flags/australia.png",
  },
  {
    name: "United States",
    flag: "/images/flags/eeuu.png",
  },
  {
    name: "South Africa",
    flag: "/images/flags/south africa.png",
  },
  {
    name: "Turkey",
    flag: "/images/flags/turkey.png",
  },
  {
    name: "Thailand",
    flag: "/images/flags/thailand.png",
  },
];
  const features = [
    {
      title: "National Racing Teams",
      text: "The world’s best riders represent their countries in a unique international championship format.",
    },
    {
      title: "Custom Bikes & Liveries",
      text: "Every nation competes with exclusive motorcycle designs, racing suits and branding.",
    },
    {
      title: "Global Fan Experience",
      text: "Fans support their country, follow standings and experience motorsport like never before.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 pt-24">

  <img
  src="/images/93.png"
  alt="GP World Cup Bike"
  className="absolute right-[-193px] top-[75px] z-0 w-[950px] opacity-80"
/>
  <img
  src="/images/72.png"
  alt="GP World Cup Bike"
  className="absolute left-[-186px] top-[75px] z-0 w-[950px] opacity-80"
/>

  <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl" />

  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
  

  <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-40 text-center lg:px-12"
>
          <div className="mb-6 rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm uppercase tracking-[0.25em] text-red-400">
            A New Era of Motorcycle Racing
          </div>

          <h1 className="max-w-5xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-black leading-tight tracking-tight text-transparent md:text-7xl">
            GP WORLD CUP
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
            The first international motorcycle championship where countries battle for global glory.
            National pride. Elite riders. Legendary circuits.
          </p>

          <div className="mt-10 flex justify-center">
  <a
    href="/social"
    className="rounded-2xl bg-red-600 px-8 py-4 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-red-500"
  >
    Follow The Project
  </a>
</div>

          
        </motion.div>
      </section>
{/* COUNTRIES */}

<section
  id="countries"
  className="relative z-20 -mt-24 bg-black px-6 py-20"
>
  <div className="mx-auto max-w-7xl">
    
    <div className="mb-12 text-center">
      <div className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
        Competing Nations
      </div>

      <h2 className="mt-4 text-4xl font-black md:text-5xl">
      10 Countries, One Trophy
      </h2>
    </div>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {countries.map((country) => (
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0 }}
  viewport={{ once: true }}
    key={country.name}

    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center text-sm font-bold uppercase tracking-wide text-white transition duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:bg-zinc-800 hover:shadow-[0_0_40px_rgba(255,0,0,0.2)]"
  >

    <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/10 opacity-0 transition group-hover:opacity-100" />

    <img
      src={country.flag}
      alt={country.name}
      className="relative z-10 mx-auto mb-4 h-10 w-16 rounded-md object-contain"
    />

    <span className="relative z-10 block">
      {country.name}
    </span>

  </motion.div>
))}
    </div>

  </div>
</section>
{/* TEAMS */}
{/* STATS */}
<section className="border-t border-white/10 bg-zinc-950/80 px-6 py-20">
  <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
      <Trophy className="mx-auto h-10 w-10 text-red-500" />
      <div className="mt-5 text-5xl font-black">1</div>
      <div className="mt-2 uppercase tracking-wide text-zinc-400">
        Championship
      </div>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
      <Globe className="mx-auto h-10 w-10 text-red-500" />
      <div className="mt-5 text-5xl font-black">10</div>
      <div className="mt-2 uppercase tracking-wide text-zinc-400">
        Nations
      </div>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
      <Flag className="mx-auto h-10 w-10 text-red-500" />
      <div className="mt-5 text-5xl font-black">5</div>
      <div className="mt-2 uppercase tracking-wide text-zinc-400">
        Continents
      </div>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
      <Shield className="mx-auto h-10 w-10 text-red-500" />
      <div className="mt-5 text-5xl font-black">20</div>
      <div className="mt-2 uppercase tracking-wide text-zinc-400">
        Riders
      </div>
    </div>

  </div>
</section>
      {/* ABOUT */}
      <section
  id="news"
  className="scroll-mt-32 mx-auto max-w-7xl px-6 py-24 lg:px-12"
>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              The Vision
            </div>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Motorsport Meets The World Cup Spirit
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-300">
              GP World Cup transforms motorcycle racing into a nation-versus-nation spectacle.
              Riders no longer race only for manufacturers — they race for their country.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Inspired by the passion of international sporting events and the excitement of premier motorcycle racing,
              this project aims to create the most emotional and globally supported racing format ever.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAT */}
      <section
  id="format"
  className="border-y border-white/10 bg-zinc-950"
>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
              Championship Format
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              10 Nations, 1 Champion
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex justify-center text-5xl font-black text-red-500">
  1
</div>
              <h3 className="mt-6 text-2xl font-bold">National Teams</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Each country selects elite riders to represent their nation in the GP World Cup.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex justify-center text-5xl font-black text-red-500">
  2
</div>
              <h3 className="mt-6 text-2xl font-bold">Global Circuits</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                Races take place at iconic tracks around the world with massive international audiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex justify-center text-5xl font-black text-red-500">
  3
</div>
              <h3 className="mt-6 text-2xl font-bold">World Champions</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                The nation with the most points becomes the GP World Cup Champion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
  id="news"
  className="scroll-mt-40 mx-auto max-w-7xl px-6 py-24 lg:px-12"
>

  {/* HIGHLIGHTS */}
<section
  id="highlights"
  className="scroll-mt-40 mx-auto max-w-7xl px-6 py-24 lg:px-12"
>

  <div className="mb-16 text-center">

    <div className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
      Race Highlights
    </div>

    <h2 className="mt-4 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-5xl font-black text-transparent">
      Mugello Grand Prix
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
      Relive the biggest moments from the latest GP World Cup race weekend.
    </p>

  </div>

  <div className="grid gap-8 md:grid-cols-3">

    {/* HIGHLIGHT 1 */}
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">

      <div className="overflow-hidden">
        <img
          src="/images/highlights/blanca.png"
          alt="Highlight 1"
          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-8">

        <div className="text-sm uppercase tracking-[0.25em] text-red-400">
          Upcoming
        </div>

        <h3 className="mt-4 text-3xl font-black leading-tight">
          Upcoming
        </h3>

      </div>

    </div>

    {/* HIGHLIGHT 2 */}
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">

      <div className="overflow-hidden">
        <img
          src="/images/highlights/blanca.png"
          alt="Highlight 2"
          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-8">

        <div className="text-sm uppercase tracking-[0.25em] text-red-400">
          Upcoming
        </div>

        <h3 className="mt-4 text-3xl font-black leading-tight">
          Upcoming
        </h3>

      </div>

    </div>

    {/* HIGHLIGHT 3 */}
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900">

      <div className="overflow-hidden">
        <img
          src="/images/highlights/blanca.png"
          alt="Highlight 3"
          className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-8">

        <div className="text-sm uppercase tracking-[0.25em] text-red-400">
          Upcoming
        </div>

        <h3 className="mt-4 text-3xl font-black leading-tight">
          Upcoming
        </h3>

      </div>

    </div>

  </div>

</section>

</section>
      <section
  id="social"
  className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-12"
>
        <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-br from-red-600/10 to-zinc-900 p-12 shadow-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Join The Movement
          </div>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Follow GP World Cup
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Be part of the project from the beginning. Follow the journey, discover the teams
            and help build the future of motorcycle racing.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

  <a
    href="https://instagram.com/gpworldcup"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:bg-pink-500/10"
  >
    <FaInstagram className="text-xl text-pink-400 transition group-hover:scale-110" />
    Instagram
  </a>

  <a
    href="https://tiktok.com/@gpworldcup"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
  >
    <FaTiktok className="text-xl transition group-hover:scale-110" />
    TikTok
  </a>

  <a
    href="https://youtube.com/@GPWorldCup"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-500/10"
  >
    <FaYoutube className="text-xl text-red-500 transition group-hover:scale-110" />
    YouTube
  </a>

  <a
    href="https://x.com/GPWorldCup"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
  >
    <FaXTwitter className="text-xl transition group-hover:scale-110" />
  </a>

  <a
    href="https://facebook.com/TUUSUARIO"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10"
  >
    <FaFacebookF className="text-xl text-blue-500 transition group-hover:scale-110" />
    Facebook
  </a>

</div>
        </div>
      </section>

      {/* FOOTER */}
      
    </div>
  );
}