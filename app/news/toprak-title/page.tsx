export default function ToprakNewsPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO IMAGE */}
      <div className="relative h-[520px] overflow-hidden">

        <img
          src="/images/news/toprak.jpg"
          alt="Toprak Razgatlioglu"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      </div>

      {/* ARTICLE */}
      <div className="mx-auto max-w-5xl px-6 py-20">

        <div className="text-sm uppercase tracking-[0.25em] text-red-400">
          Riders
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl">
          Toprak Targets World Cup MVP Ahead of 2026 GP World Cup
        </h1>

        <p className="mt-10 text-2xl font-semibold leading-10 text-zinc-200">
          Turkish superstar Toprak Razgatlıoğlu has made his ambitions clear
          ahead of the inaugural GP World Cup season, declaring that his focus
          is firmly set on bringing the World Cup MVP trophy to Turkey.
        </p>

        <div className="mt-14 space-y-8 text-lg leading-9 text-zinc-400">

          <p>
            One of the most spectacular and aggressive riders in modern
            motorcycle racing, Toprak enters the new international competition
            as one of the leading figures of Team Turkey and one of the
            championship’s biggest attractions.
          </p>

          <p>
            Known worldwide for his late-braking style, relentless overtaking
            ability and fearless racecraft, the Turkish rider is expected to
            play a central role in his nation’s campaign during the first-ever
            GP World Cup season.
          </p>

          <p>
            Speaking ahead of the championship launch, Toprak emphasized the
            importance of representing his country on an international stage
            built entirely around national pride and team competition.
          </p>

          <p>
            The GP World Cup’s unique format — where riders compete under their
            national flags rather than traditional factory teams — has already
            generated enormous excitement among fans, and few riders appear
            more motivated by the concept than the Turkish star.
          </p>

          <p>
            Turkey is expected to arrive with a really
            competitive lineup in the paddock, with Toprak leading the project
            both as team leader and as one of the championship favorites.
          </p>


          <p>
            For Toprak, however, the objective is already clear: fight for
            victories, lead Turkey to the top of the standings and <span className="font-bold text-white">become the
            first rider to lift the GP World Cup MVP trophy</span>.
          </p>

        </div>

      </div>

    </div>
  );
}