const races = {
  mugello: {
    name: "Italian GP",
    circuit: "Mugello Circuit",
    country: "Italy",
    flag: "/images/flags/italy.png",
    laps: 24,
    length: "5.2 KM",
    corners: 15,
   status: "finished",
   raceTime: "40:31.842",
    image: "/images/circuits/mugello.png",
    results: [
  {
    position: "P1",
    rider: "Marc Marquez",
    number: 93,
    color: "bg-red-600",
    flag: "/images/flags/spain.png",
    gap: "40:31.842",
  },
  {
    position: "P2",
    rider: "Francesco Bagnaia",
    number: 63,
    color: "bg-green-600",
    flag: "/images/flags/italy.png",
    gap: "+0.742",
  },
  {
    position: "P3",
    rider: "Jorge Martin",
    number: 89,
    color: "bg-red-600",
    flag: "/images/flags/spain.png",
    gap: "+1.964",
  },
  {
    position: "P4",
    rider: "Ai Ogura",
    number: 79,
    color: "bg-white text-black",
    flag: "/images/flags/japan.png",
    gap: "+4.118",
  },
  {
    position: "P5",
    rider: "Fabio Di Giannantonio",
    number: 49,
    color: "bg-green-600",
    flag: "/images/flags/italy.png",
    gap: "+6.287",
  },
  {
    position: "P6",
    rider: "Fabio Quartararo",
    number: 20,
    color: "bg-blue-800",
    flag: "/images/flags/france.png",
    gap: "+8.054",
  },
  {
    position: "P7",
    rider: "Jack Miller",
    number: 43,
    color: "bg-yellow-400 text-black",
    flag: "/images/flags/australia.png",
    gap: "+9.612",
  },
  {
    position: "P8",
    rider: "Toprak Razgatlioglu",
    number: 54,
    color: "bg-red-800",
    flag: "/images/flags/turkey.png",
    gap: "+11.306",
  },
  {
    position: "P9",
    rider: "Jake Dixon",
    number: 96,
    color: "bg-purple-700",
    flag: "/images/flags/uk.png",
    gap: "+13.990",
  },
  {
    position: "P10",
    rider: "Brad Binder",
    number: 33,
    color: "bg-orange-500",
    flag: "/images/flags/south africa.png",
    gap: "+16.401",
  },
  {
    position: "P11",
    rider: "Senna Agius",
    number: 81,
    color: "bg-yellow-500 text-black",
    flag: "/images/flags/australia.png",
    gap: "+18.754",
  },
  {
    position: "P12",
    rider: "Joe Roberts",
    number: 16,
    color: "bg-blue-500",
    flag: "/images/flags/eeuu.png",
    gap: "+21.112",
  },
  {
    position: "P13",
    rider: "Rory Skinner",
    number: 11,
    color: "bg-purple-700",
    flag: "/images/flags/uk.png",
    gap: "+23.578",
  },
  {
    position: "P14",
    rider: "Deniz Oncu",
    number: 53,
    color: "bg-red-600",
    flag: "/images/flags/turkey.png",
    gap: "+26.241",
  },
  {
    position: "P15",
    rider: "Sean Dylan Kelly",
    number: 40,
    color: "bg-sky-500",
    flag: "/images/flags/eeuu.png",
    gap: "+29.004",
  },
  {
    position: "P16",
    rider: "Somkiat Chantra",
    number: 35,
    color: "bg-zinc-400 text-black",
    flag: "/images/flags/thailand.png",
    gap: "+32.688",
  },
  {
    position: "P17",
    rider: "Loris Baz",
    number: 76,
    color: "bg-blue-800",
    flag: "/images/flags/france.png",
    gap: "+36.952",
  },
  {
    position: "P18",
    rider: "Ayumu Sasaki",
    number: 71,
    color: "bg-white text-black",
    flag: "/images/flags/japan.png",
    gap: "+40.107",
  },
  {
    position: "P19",
    rider: "Darryn Binder",
    number: 15,
    color: "bg-orange-500",
    flag: "/images/flags/south africa.png",
    gap: "+44.351",
  },
  {
    position: "P20",
    rider: "Nakarin Atiratphuvapat",
    number: 41,
    color: "bg-zinc-400 text-black",
    flag: "/images/flags/thailand.png",
    gap: "+49.826",
  },
],
  },

  jerez: {
    name: "Spanish GP",
    circuit: "Circuito de Jerez",
    country: "Spain",
    flag: "/images/flags/spain.png",
    laps: 25,
    length: "4.4 KM",
    corners: 13,
    status: "upcoming",
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
    status: "upcoming",
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
    status: "upcoming",
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
    status: "upcoming",
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
          {"results" in gp ? (

<div className="mt-14">

<div className="mb-8 rounded-[2rem] border border-green-500/20 bg-zinc-900/70 p-10 text-center">

<div className="text-sm uppercase tracking-[0.25em] text-green-400">
Race Finished
</div>

<h2 className="mt-4 text-4xl font-black">
Official Classification
</h2>

<p className="mt-4 text-zinc-400">
Race duration: <span className="font-semibold text-white">{gp.raceTime}</span>
</p>

</div>

<div className="space-y-3">

{gp.results.map((rider: any) => (

<div
key={rider.position}
className="flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 px-6 py-4"
>

<div className="flex items-center gap-5">

<div className="w-12 text-2xl font-black text-red-500">
{rider.position}
</div>

<div
className={`flex h-12 w-14 items-center justify-center rounded-xl text-lg font-black ${rider.color}`}
>
{rider.number}
</div>

<div>

<div className="text-lg font-bold">
{rider.rider}
</div>

<div className="text-sm text-zinc-500">
{rider.gap}
</div>

</div>

</div>

<img
src={rider.flag}
className="h-8 w-12 rounded object-cover"
/>

</div>

))}

</div>

</div>

) : (

<div className="mt-14 rounded-[2rem] border border-white/10 bg-zinc-900/70 p-12 text-center">

<div className="text-sm uppercase tracking-[0.25em] text-red-400">
Race Weekend
</div>

<h2 className="mt-5 text-4xl font-black">
Results Coming Soon
</h2>

<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
Official race classifications, podium finishers and championship standings will appear here once the Grand Prix has been completed.
</p>

</div>

)}

        </div>

      </section>

    </div>
  );
}