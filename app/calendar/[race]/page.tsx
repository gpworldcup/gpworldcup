const races = {
  mugello: {
    name: "Italian GP",
    circuit: "Mugello Circuit",
    country: "Italy",
    flag: "/images/flags/italy.png",
    laps: 24,
    length: "5.2 KM",
    corners: 15,
    image: "/images/circuits/mugello.png",
  },

  jerez: {
    name: "Spanish GP",
    circuit: "Circuito de Jerez",
    country: "Spain",
    flag: "/images/flags/spain.png",
    laps: 25,
    length: "4.4 KM",
    corners: 13,
    image: "/images/circuits/jerez.png",
  },

  lemans: {
    name: "French GP",
    circuit: "Le Mans Bugatti Circuit",
    country: "France",
    flag: "/images/flags/france.png",
    laps: 27,
    length: "4.1 KM",
    corners: 14,
    image: "/images/circuits/lemans.png",
  },

  silverstone: {
    name: "British GP",
    circuit: "Silverstone Circuit",
    country: "United Kingdom",
    flag: "/images/flags/uk.png",
    laps: 20,
    length: "5.9 KM",
    corners: 18,
    image: "/images/circuits/silverstone.png",
  },

  sachsenring: {
    name: "German GP",
    circuit: "Sachsenring",
    country: "Germany",
    flag: "/images/flags/germany.png",
    laps: 30,
    length: "3.7 KM",
    corners: 13,
    image: "/images/circuits/sachsenring.png",
  },
};

export default async function RacePage({
  params,
}: {
  params: Promise<{ race: string }>;
}) {
  const { race } = await params;

  const gp = races[race as keyof typeof races];

  if (!gp) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Race not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <a
            href="/calendar"
            className="mb-10 inline-block text-red-500"
          >
            ← Back
          </a>

          <h1 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-6xl font-black text-transparent">
            {gp.name}
          </h1>

          <p className="mt-4 text-zinc-400">
            {gp.circuit}
          </p>

          {/* CIRCUIT IMAGE */}
          <div className="relative mt-14 flex h-[420px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">

            <div className="absolute h-[500px] w-[500px] rounded-full bg-red-600/20 blur-3xl" />

            <img
              src={gp.image}
              alt={gp.name}
              className="relative z-10 h-[92%] w-[92%] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            />

          </div>

          {/* INFO */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 text-center">
              <div className="text-sm uppercase tracking-[0.25em] text-red-400">
                Laps
              </div>

              <div className="mt-4 text-5xl font-black">
                {gp.laps}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 text-center">
              <div className="text-sm uppercase tracking-[0.25em] text-red-400">
                Circuit Length
              </div>

              <div className="mt-4 text-5xl font-black">
                {gp.length}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 text-center">
              <div className="text-sm uppercase tracking-[0.25em] text-red-400">
                Corners
              </div>

              <div className="mt-4 text-5xl font-black">
                {gp.corners}
              </div>
            </div>

          </div>

          {/* RESULTS COMING SOON */}
          <div className="mt-14 rounded-[2rem] border border-white/10 bg-zinc-900/70 p-12 text-center">

            <div className="text-sm uppercase tracking-[0.25em] text-red-400">
              Race Weekend
            </div>

            <h2 className="mt-5 text-4xl font-black">
              Results Coming Soon
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Official race classifications, podium finishers and championship
              standings will appear here once the Grand Prix has been completed.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}