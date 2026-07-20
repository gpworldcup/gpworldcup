export default function RankingPage() {
  const standings = [
  {
    position: 1,
    country: "Spain",
    flag: "/images/flags/spain.png",
    points: 41,
  },
  {
    position: 2,
    country: "Italy",
    flag: "/images/flags/italy.png",
    points: 31,
  },
  {
    position: 3,
    country: "Australia",
    flag: "/images/flags/australia.png",
    points: 14,
  },
  {
    position: 4,
    country: "Japan",
    flag: "/images/flags/japan.png",
    points: 13,
  },
  {
    position: 5,
    country: "France",
    flag: "/images/flags/france.png",
    points: 10,
  },
  {
    position: 6,
    country: "Turkey",
    flag: "/images/flags/turkey.png",
    points: 10,
  },
  {
    position: 7,
    country: "United Kingdom",
    flag: "/images/flags/uk.png",
    points: 10,
  },
  {
    position: 8,
    country: "South Africa",
    flag: "/images/flags/south africa.png",
    points: 6,
  },
  {
    position: 9,
    country: "United States",
    flag: "/images/flags/eeuu.png",
    points: 5,
  },
  {
    position: 10,
    country: "Thailand",
    flag: "/images/flags/thailand.png",
    points: 0,
  },
];

  const circuits = [
    {
      name: "Mugello Circuit",
      country: "Italy",
    },

    {
      name: "Circuito de Jerez",
      country: "Spain",
    },

    {
      name: "Le Mans Bugatti Circuit",
      country: "France",
    },

    {
      name: "Silverstone Circuit",
      country: "United Kingdom",
    },

    {
      name: "Sachsenring",
      country: "Germany",
    },
  ];

  const getFlag = (country: string) => {
    switch (country) {
      case "Spain":
        return "/images/flags/spain.png";

      case "Italy":
        return "/images/flags/italy.png";

      case "France":
        return "/images/flags/france.png";

      case "Japan":
        return "/images/flags/japan.png";

      case "Australia":
        return "/images/flags/australia.png";

      case "United States":
        return "/images/flags/eeuu.png";

      case "South Africa":
        return "/images/flags/south africa.png";

      case "United Kingdom":
        return "/images/flags/uk.png";

      case "Turkey":
        return "/images/flags/turkey.png";

      case "Germany":
        return "/images/flags/germany.png";

      default:
        return "/images/flags/thailand.png";
    }
  };

  return (
    <div className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        {/* BACK */}
        <a
          href="/"
          className="mb-10 inline-block text-red-500 hover:text-red-400"
        >
          ← Back
        </a>

        {/* HEADER */}
        <div className="mb-16 text-center">

          <div className="text-sm uppercase tracking-[0.25em] text-red-400">
            Championship Standings
          </div>

          <h1 className="mx-auto max-w-5xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-center text-5xl font-black leading-tight tracking-tight text-transparent md:text-7xl">
  GP WORLD CUP RANKING
</h1>

        </div>

        {/* STANDINGS */}
        <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8">

          <div className="space-y-4">

            {standings.map((team, index) => (
              <div
                key={team.country}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-5 transition hover:border-red-500/30"
              >

                <div className="flex items-center gap-6">

                  <div className="text-3xl font-black text-zinc-500">
                    {index + 1}
                  </div>

                  <img
                    src={getFlag(team.country)}
                    alt={team.country}
                    className="h-10 w-16 rounded-md object-cover"
                  />

                  <div className="text-2xl font-bold">
                    {team.country}
                  </div>

                </div>

                <div className="text-3xl font-black text-red-500">
                  {team.points} pts
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* CIRCUIT SUMMARY */}
        <div className="mt-20">

          <h2 className="mb-10 text-4xl font-black">
            Circuit Summary
          </h2>

          <div className="space-y-10">

            {circuits.map((circuit, circuitIndex) => (
              <div
                key={circuitIndex}
                className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8"
              >

                {/* HEADER */}
                <div className="mb-8 flex items-center justify-between">

                  <div>

                    <div className="text-sm uppercase tracking-[0.25em] text-red-400">
                      Round {circuitIndex + 1}
                    </div>

                    <h3 className="mt-2 text-3xl font-black">
                      {circuit.name}
                    </h3>

                  </div>

                  <div className="rounded-full bg-zinc-700 px-5 py-2 text-sm font-bold uppercase">
                    {circuitIndex === 0 ? "Finished" : "Upcoming"}
                  </div>

                </div>

                {/* PODIUM */}
                <div className="space-y-3">

  {circuitIndex === 0 ? (

    <>
      {[
        {
          position: "P1",
          rider: "Marc Marquez",
          number: 93,
          color: "bg-red-600",
          flag: "/images/flags/spain.png",
        },
        {
          position: "P2",
          rider: "Francesco Bagnaia",
          number: 63,
          color: "bg-green-600",
          flag: "/images/flags/italy.png",
        },
        {
          position: "P3",
          rider: "Jorge Martin",
          number: 89,
          color: "bg-red-600",
          flag: "/images/flags/spain.png",
        },
      ].map((rider) => (

        <div
          key={rider.position}
          className="flex items-center justify-between rounded-xl border border-white/10 bg-black/70 px-4 py-3"
        >

          <div className="flex items-center gap-4">

            <div className="w-10 text-lg font-black text-red-500">
              {rider.position}
            </div>

            <div
              className={`flex h-9 w-14 items-center justify-center rounded-lg font-black ${rider.color}`}
            >
              {rider.number}
            </div>

            <div className="font-semibold uppercase">
              {rider.rider}
            </div>

          </div>

          <img
            src={rider.flag}
            className="h-8 w-12 rounded object-cover"
          />

        </div>

      ))}
    </>

  ) : (

    <>
      {[1, 2, 3].map((position) => (

        <div
          key={position}
          className="flex items-center justify-between rounded-xl border border-white/10 bg-black/70 px-4 py-3"
        >

          <div className="flex items-center gap-4">

            <div className="w-10 text-lg font-black text-zinc-500">
              P{position}
            </div>

            <div className="flex h-9 w-14 items-center justify-center rounded-lg bg-zinc-700 font-black">
              --
            </div>

            <div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              To Be Determined
            </div>

          </div>

        </div>

      ))}
    </>

  )}

</div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}