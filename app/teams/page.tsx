import Link from "next/link";

const teams = [
  {
    name: "Spain",
    slug: "spain",
    flag: "/images/flags/spain.png",
  },

  {
    name: "Italy",
    slug: "italy",
    flag: "/images/flags/italy.png",
  },

  {
    name: "France",
    slug: "france",
    flag: "/images/flags/france.png",
  },

  {
    name: "United Kingdom",
    slug: "uk",
    flag: "/images/flags/uk.png",
  },

  {
    name: "Japan",
    slug: "japan",
    flag: "/images/flags/japan.png",
  },

  {
    name: "Australia",
    slug: "australia",
    flag: "/images/flags/australia.png",
  },

  {
    name: "United States",
    slug: "usa",
    flag: "/images/flags/eeuu.png",
  },

  {
    name: "South Africa",
    slug: "southafrica",
    flag: "/images/flags/south africa.png",
  },

  {
    name: "Turkey",
    slug: "turkey",
    flag: "/images/flags/turkey.png",
  },

  {
    name: "Thailand",
    slug: "thailand",
    flag: "/images/flags/thailand.png",
  },
];

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        <a
          href="/"
          className="mb-10 inline-block text-red-500 hover:text-red-400"
        >
          ← Back
        </a>

        <div className="mb-16 text-center">

          <div className="text-sm uppercase tracking-[0.25em] text-red-400">
            National Teams
          </div>

          <h1 className="mx-auto max-w-5xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-center text-5xl font-black leading-tight tracking-tight text-transparent md:text-7xl">
  GP WORLD CUP TEAMS
</h1>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {teams.map((team) => (
            <Link
              key={team.slug}
              href={`/teams/${team.slug}`}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8 transition duration-300 hover:-translate-y-3 hover:border-red-500/40 hover:shadow-[0_0_60px_rgba(255,0,0,0.25)]"
            >

              <div className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full bg-red-600/10 blur-3xl transition group-hover:bg-red-600/20" />

              <div className="flex flex-col items-center text-center">

  <img
    src={team.flag}
    alt={team.name}
    className="h-16 w-24 rounded-xl object-cover"
  />

  <h2 className="mt-6 text-3xl font-black">
    {team.name}
  </h2>

</div>

            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}