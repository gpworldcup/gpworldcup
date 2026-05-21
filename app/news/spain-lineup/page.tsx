export default function SpainLineupNews() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO IMAGE */}
      <div className="relative h-[520px] overflow-hidden">

        <img
          src="/images/news/spain.png"
          alt="Team Spain"
          className="h-full w-full object-cover object-[center_15%]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      </div>

      {/* ARTICLE */}
      <div className="mx-auto max-w-5xl px-6 py-20">

        <div className="text-sm uppercase tracking-[0.25em] text-red-400">
          Teams
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl">
          Spain Reveals Star-Studded Rider Lineup for Inaugural GP World Cup
        </h1>

        <p className="mt-10 text-2xl font-semibold leading-10 text-zinc-200">
          Team Spain has officially unveiled its final rider lineup for the
          first-ever GP World Cup season, confirming a trio packed with
          championship pedigree, raw talent and one of the strongest rosters
          on the grid.
        </p>

        <div className="mt-14 space-y-8 text-lg leading-9 text-zinc-400">

          <p>
            Leading the team is nine-time world champion <span className="font-bold text-white">Marc Márquez</span>,
            joined by premier-class world champion{" "}
            <span className="font-bold text-white">Jorge Martín</span>, while
            rising sensation <span className="font-bold text-white">Pedro Acosta</span> completes
            the lineup as Spain prepares to fight for the inaugural Nations Championship title.
          </p>

          <p>
            The announcement immediately positions Spain among the favourites
            heading into the debut edition of the GP World Cup, a competition
            designed to bring together the world’s best motorcycle racing nations
            in a unique country-versus-country format.
          </p>

          <p>
            Márquez, widely regarded as one of the greatest riders of the modern
            era, brings unmatched experience and an extraordinary winning record
            to the Spanish squad. With dozens of victories and podium finishes
            across his career, the Cervera-born rider is expected to play a key
            leadership role both on and off the track.
          </p>

          <p>
            Alongside him stands Jorge Martín, whose aggressive riding style and
            outright speed made him one of the most feared competitors in the
            paddock. The Madrid rider enters the tournament at the peak of his
            career and is seen as a major weapon for Team Spain in sprint and
            qualifying situations.
          </p>

          <p>
            Completing the trio is Pedro Acosta, the youngest member of the team
            and one of the brightest talents in world motorcycle racing. Despite
            his age, Acosta has already built a reputation for fearless racecraft
            and maturity beyond his years, making him a crucial long-term asset
            for the Spanish project.
          </p>

          <p>
            Team Spain’s combination of proven champions and emerging talent has
            already generated major excitement among fans, with many viewing the
            lineup as one of the most balanced and competitive in the entire
            championship.
          </p>

          <p>
            With Márquez, Martín and Acosta under the same banner, Spain now
            sends a clear message to the rest of the grid: they are entering
            the inaugural season with only one objective — <span className="font-bold text-white"> winning the world title</span>.
          </p>

        </div>

      </div>

    </div>
  );
}