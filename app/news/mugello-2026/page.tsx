export default function MugelloNewsPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO IMAGE */}
      <div className="relative h-[520px] overflow-hidden">

        <img
          src="/images/news/mugello.jpg"
          alt="Mugello Circuit"
          className="h-full w-full object-cover object-[center_65%]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      </div>

      {/* ARTICLE */}
      <div className="mx-auto max-w-5xl px-6 py-20">

        <div className="text-sm uppercase tracking-[0.25em] text-red-400">
          Calendar
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl">
          Mugello to Open Historic 2026 GP World Cup Season
        </h1>

        <p className="mt-10 text-2xl font-semibold leading-10 text-zinc-200">
          The iconic Mugello Circuit has officially been confirmed as the
          opening venue for the inaugural 2026 GP World Cup season, marking
          the beginning of a new era in international motorcycle racing.
        </p>

        <div className="mt-14 space-y-8 text-lg leading-9 text-zinc-400">

          <p>
            Set in the heart of Tuscany, Italy, Mugello will host the first
            race weekend of the championship as national teams from across
            the globe prepare to battle for the first-ever GP World Cup title.
          </p>

          <p>
            Organizers confirmed that the debut edition of the competition
            will take place entirely across Europe, with legendary circuits
            expected to form the backbone of the inaugural calendar. The
            decision was made to guarantee logistical stability and maximize
            fan attendance during the launch season of the championship.
          </p>

          <p>
            Known for its breathtaking scenery, ultra-fast main straight and
            passionate atmosphere, Mugello is widely regarded as one of the
            most spectacular circuits in world motorsport. Its combination of
            high-speed corners and technical sectors is expected to provide
            the perfect stage to open the new international competition.
          </p>

          <p>
            The GP World Cup introduces a nation-versus-nation format, with
            countries represented by two official riders and one reserve rider
            throughout the season. The championship aims to unite elite riders
            under their national flags in a competition centered around pride,
            rivalry and team strategy.
          </p>

          <p>
            Italy’s selection as the opening host further reinforces the
            importance of European racing culture in the project’s foundation.
            Several other classic European venues are expected to feature
            throughout the season, creating a calendar deeply rooted in the
            continent’s rich motorcycle racing heritage.
          </p>

          <p>
            Fans have already reacted positively to the announcement, with
            Mugello viewed as an ideal location to launch the championship
            thanks to its history, atmosphere and reputation for producing
            unforgettable races.
          </p>

          <p className="text-xl font-semibold text-white">
            As anticipation continues to grow, the countdown to Mugello has
            officially begun — and with it, the beginning of the first chapter
            in GP World Cup history.
          </p>

        </div>

      </div>

    </div>
  );
}