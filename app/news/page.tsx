export default function NewsPage() {
  const news = [
  {
    title: "Spain Reveals Final Rider Lineup",
    category: "Teams",
    image: "/images/news/spain-cover.jpg",
    href: "/news/spain-lineup",
  },
  {
    title: "Mugello Opens 2026 GP World Cup Season",
    category: "Calendar",
    image: "/images/news/mugello.jpg",
    href: "/news/mugello-2026",
  },
  {
    title: "Toprak Targets World Cup MVP",
    category: "Riders",
    image: "/images/news/toprak-cover.png",
    href: "/news/toprak-title",
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
            Latest News
          </div>

          <h1 className="mx-auto max-w-5xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-center text-5xl font-black leading-tight tracking-tight text-transparent md:text-7xl">
  GP WORLD CUP NEWS
</h1>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

  {news.map((article) => (

    <a
      key={article.title}
      href={article.href}
      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-red-500/40"
    >

      <div className="overflow-hidden">

        <img
          src={article.image}
          alt={article.title}
          className="h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
        />

      </div>

      <div className="p-8">

        <div className="text-sm uppercase tracking-[0.25em] text-red-400">
          {article.category}
        </div>

        <h2 className="mt-5 text-4xl font-black leading-tight">
          {article.title}
        </h2>

      </div>

    </a>

  ))}

</div>

      </div>

    </div>
  );
}