export default function CalendarPage() {
  const races = [
    {
      slug: "mugello",
      round: "01",
      country: "Italy",
      circuit: "Mugello Circuit",
      location: "Tuscany",
      date: "18-19 July",
    },

    {
      slug: "jerez",
      round: "02",
      country: "Spain",
      circuit: "Circuit de Jerez",
      location: "Andalusia",
      date: "25-26 July",
    },

    {
      slug: "lemans",
      round: "03",
      country: "France",
      circuit: "Le Mans Bugatti Circuit",
      location: "Le Mans",
      date: "To be confirmed",
    },

    {
      slug: "silverstone",
      round: "04",
      country: "United Kingdom",
      circuit: "Silverstone Circuit",
      location: "Northamptonshire",
      date: "To be confirmed",
    },

    {
      slug: "sachsenring",
      round: "05",
      country: "Germany",
      circuit: "Sachsenring Circuit",
      location: "Hohenstein-Ernstthal",
      date: "To be confirmed",
    },
  ];

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
            2026 Season
          </div>

          <h1 className="mx-auto max-w-5xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-center text-5xl font-black leading-tight tracking-tight text-transparent md:text-7xl">
  GP WORLD CUP CALENDAR
</h1>

        </div>

        <div className="space-y-6">

          {races.map((race) => (
            <a
              key={race.round}
              href={`/calendar/${race.slug}`}
              className="block"
            >
              <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8 transition duration-300 hover:border-red-500/40 hover:bg-zinc-900 md:flex-row md:items-center md:justify-between">

                <div className="flex items-center gap-8">

                  <div className="text-5xl font-black text-red-500">
                    {race.round}
                  </div>

                  <div>

                    <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                      {race.country}
                    </div>

                    <h2 className="mt-2 text-3xl font-black">
                      {race.circuit}
                    </h2>

                    <div className="mt-2 text-zinc-400">
                      {race.location}
                    </div>

                  </div>

                </div>

                <div className="text-2xl font-bold text-white">
                  {race.date}
                </div>

              </div>
            </a>
          ))}

        </div>

      </div>

    </div>
  );
}