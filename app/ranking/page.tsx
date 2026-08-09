export default function RankingPage() {
const standings = [
{ country: 'Spain', points: 63 },
{ country: 'Italy', points: 61 },
{ country: 'France', points: 39 },
{ country: 'Australia', points: 31 },
{ country: 'Turkey', points: 28 },
{ country: 'Japan', points: 25 },
{ country: 'United Kingdom', points: 17 },
{ country: 'United States', points: 9 },
{ country: 'South Africa', points: 8 },
{ country: 'Thailand', points: 0 },
];

const circuits = [
{ name: 'Mugello Circuit', status: 'Finished' },
{ name: 'Circuito de Jerez', status: 'Finished' },
{ name: 'Le Mans Circuit', status: 'Upcoming' },
{ name: 'Silverstone Circuit', status: 'Upcoming' },
{ name: 'Sachsenring', status: 'Upcoming' },
];

const getFlag = (country: string) => {
switch (country) {
case 'Spain':
return '/images/flags/spain.png';
case 'Italy':
return '/images/flags/italy.png';
case 'France':
return '/images/flags/france.png';
case 'Japan':
return '/images/flags/japan.png';
case 'Australia':
return '/images/flags/australia.png';
case 'United States':
return '/images/flags/eeuu.png';
case 'South Africa':
return '/images/flags/south africa.png';
case 'United Kingdom':
return '/images/flags/uk.png';
case 'Turkey':
return '/images/flags/turkey.png';
default:
return '/images/flags/thailand.png';
}
};

return <div className='min-h-screen bg-black px-6 py-24 text-white'> <div className='mx-auto max-w-7xl'> <a href='/' className='mb-10 inline-block text-red-500 hover:text-red-400'>
← Back </a>

```
    <div className='mb-16 text-center'>
      <div className='text-sm uppercase tracking-[0.25em] text-red-400'>
        Championship Standings
      </div>

      <h1 className='mx-auto max-w-5xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-center text-5xl font-black leading-tight tracking-tight text-transparent md:text-7xl'>
        GP WORLD CUP RANKING
      </h1>
    </div>

    <div className='rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8'>
      <div className='space-y-4'>
        {standings.map((team, index) => (
          <div
            key={team.country}
            className='flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-5 transition hover:border-red-500/30'
          >
            <div className='flex items-center gap-6'>
              <div className='text-3xl font-black text-zinc-500'>{index + 1}</div>

              <img
                src={getFlag(team.country)}
                alt={team.country}
                className='h-10 w-16 rounded-md object-cover'
              />

              <div className='text-2xl font-bold'>{team.country}</div>
            </div>

            <div className='text-3xl font-black text-red-500'>
              {team.points} pts
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='mt-20'>
      <h2 className='mb-10 text-4xl font-black'>Circuit Summary</h2>

      <div className='space-y-10'>
        {circuits.map((circuit, circuitIndex) => (
          <div
            key={circuit.name}
            className='rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8'
          >
            <div className='mb-8 flex items-center justify-between'>
              <div>
                <div className='text-sm uppercase tracking-[0.25em] text-red-400'>
                  Round {circuitIndex + 1}
                </div>

                <h3 className='mt-2 text-3xl font-black'>{circuit.name}</h3>
              </div>

              <div className='rounded-full bg-zinc-700 px-5 py-2 text-sm font-bold uppercase'>
                {circuit.status}
              </div>
            </div>

            <div className='space-y-3'>
              {(circuitIndex === 0
                ? [
                    {
                      position: 'P1',
                      rider: 'Marc Marquez',
                      number: 93,
                      color: 'bg-red-600',
                      flag: '/images/flags/spain.png',
                    },
                    {
                      position: 'P2',
                      rider: 'Francesco Bagnaia',
                      number: 63,
                      color: 'bg-green-600',
                      flag: '/images/flags/italy.png',
                    },
                    {
                      position: 'P3',
                      rider: 'Jorge Martin',
                      number: 89,
                      color: 'bg-red-600',
                      flag: '/images/flags/spain.png',
                    },
                  ]
                : circuitIndex === 1
                ? [
                    {
                      position: 'P1',
                      rider: 'Fabio Quartararo',
                      number: 20,
                      color: 'bg-blue-800',
                      flag: '/images/flags/france.png',
                    },
                    {
                      position: 'P2',
                      rider: 'Fabio Di Giannantonio',
                      number: 49,
                      color: 'bg-green-600',
                      flag: '/images/flags/italy.png',
                    },
                    {
                      position: 'P3',
                      rider: 'Jorge Martin',
                      number: 89,
                      color: 'bg-red-600',
                      flag: '/images/flags/spain.png',
                    },
                  ]
                : [
                    {
                      position: 'P1',
                      rider: 'To Be Determined',
                      number: '--',
                      color: 'bg-zinc-700',
                      flag: '',
                    },
                    {
                      position: 'P2',
                      rider: 'To Be Determined',
                      number: '--',
                      color: 'bg-zinc-700',
                      flag: '',
                    },
                    {
                      position: 'P3',
                      rider: 'To Be Determined',
                      number: '--',
                      color: 'bg-zinc-700',
                      flag: '',
                    },
                  ]
              ).map((rider) => (
                <div
                  key={rider.position}
                  className='flex items-center justify-between rounded-xl border border-white/10 bg-black/70 px-4 py-3'
                >
                  <div className='flex items-center gap-4'>
                    <div className='w-10 text-lg font-black text-red-500'>
                      {rider.position}
                    </div>

                    <div
                      className={`flex h-9 w-14 items-center justify-center rounded-lg font-black ${rider.color}`}
                    >
                      {rider.number}
                    </div>

                    <div className='font-semibold uppercase'>{rider.rider}</div>
                  </div>

                  {rider.flag ? (
                    <img
                      src={rider.flag}
                      alt={rider.rider}
                      className='h-8 w-12 rounded object-cover'
                    />
                  ) : (
                    <div className='w-12' />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
;
}