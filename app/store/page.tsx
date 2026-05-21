export default function StorePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-white">

      <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-900/70 px-10 py-20 text-center">

        {/* RED GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative z-10">

          <div className="text-sm uppercase tracking-[0.3em] text-red-400">
            GP WORLD CUP
          </div>

          <h1 className="mx-auto max-w-5xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-center text-5xl font-black leading-tight tracking-tight text-transparent md:text-7xl">
  STORE
</h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            We are currently working on official GP World Cup merchandise,
            apparel and limited edition collections.
          </p>

          <div className="mt-10 inline-flex rounded-full border border-red-500/30 bg-red-600/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.25em] text-red-400">
            Coming Soon
          </div>

          <div className="mt-12">
            <a
              href="/social"
              className="text-sm font-bold uppercase tracking-wide text-zinc-500 transition hover:text-white"
            >
              ← Back to Social
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}