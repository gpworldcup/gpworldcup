import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
  FaTwitter,
} from "react-icons/fa6";
export default function SocialPage() {
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
        <div className="mb-20 text-center">

          <div className="text-sm uppercase tracking-[0.25em] text-red-400">
            Community
          </div>

          <h1 className="mx-auto max-w-5xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-center text-5xl font-black leading-tight tracking-tight text-transparent md:text-7xl">
  FOLLOW THE MOVEMENT
</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Follow GP World Cup across every platform and join the global
            motorsport community.
          </p>

        </div>

        {/* SOCIAL GRID */}
<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

  {/* INSTAGRAM */}
  <a
    href="https://instagram.com/gpworldcup"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-[0_0_60px_rgba(236,72,153,0.2)]"
  >

    <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />

    <div className="relative z-10 text-center">

      <FaInstagram className="mx-auto text-6xl text-pink-500 transition duration-300 group-hover:scale-110" />

      <div className="mt-8 text-sm uppercase tracking-[0.25em] text-pink-400">
        Social
      </div>

      <h2 className="mt-5 text-3xl font-black">
        Instagram
      </h2>

      <p className="mt-4 leading-7 text-zinc-400">
        Posters, rider reveals, championship edits and race graphics.
      </p>

      <div className="mt-10 text-sm font-bold uppercase tracking-wide text-white">
        Follow →
      </div>

    </div>

  </a>

  {/* TIKTOK */}
  <a
    href="https://tiktok.com/@gpworldcup"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_0_60px_rgba(255,255,255,0.12)]"
  >

    <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-white/5 blur-3xl" />

    <div className="relative z-10 text-center">

      <FaTiktok className="mx-auto text-6xl text-black-500 transition duration-300 group-hover:scale-110" />

      <div className="mt-8 text-sm uppercase tracking-[0.25em] text-zinc-300">
        Videos
      </div>

      <h2 className="mt-5 text-3xl font-black">
        TikTok
      </h2>

      <p className="mt-4 leading-7 text-zinc-400">
        Short edits, fictional race intros and cinematic content.
      </p>

      <div className="mt-10 text-sm font-bold uppercase tracking-wide text-white">
        Watch →
      </div>

    </div>

  </a>

  {/* X */}
  <a
    href="https://x.com/GPWorldCup"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_0_60px_rgba(255,255,255,0.12)]"
  >

    <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-white/5 blur-3xl" />

    <div className="relative z-10 text-center">

      <FaTwitter className="mx-auto text-6xl text-blue-500 transition duration-300 group-hover:scale-110" />

      <div className="mt-8 text-sm uppercase tracking-[0.25em] text-zinc-300">
        Updates
      </div>

      <h2 className="mt-5 text-3xl font-black">
        Twitter
      </h2>

      <p className="mt-4 leading-7 text-zinc-400">
        News, rider transfers and championship announcements.
      </p>

      <div className="mt-10 text-sm font-bold uppercase tracking-wide text-white">
        Follow →
      </div>

    </div>

  </a>

  {/* YOUTUBE */}
  <a
    href="https://youtube.com/@GPWorldCup"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-[0_0_60px_rgba(239,68,68,0.2)]"
  >

    <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />

    <div className="relative z-10 text-center">

      <FaYoutube className="mx-auto text-6xl text-red-500 transition duration-300 group-hover:scale-110" />

      <div className="mt-8 text-sm uppercase tracking-[0.25em] text-red-400">
        Content
      </div>

      <h2 className="mt-5 text-3xl font-black">
        YouTube
      </h2>

      <p className="mt-4 leading-7 text-zinc-400">
        Full cinematic concepts, race weekends and GPWC stories.
      </p>

      <div className="mt-10 text-sm font-bold uppercase tracking-wide text-white">
        Subscribe →
      </div>

    </div>

  </a>

  {/* FACEBOOK */}
  <a
    href="https://facebook.com/TUUSUARIO"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_60px_rgba(59,130,246,0.2)]"
  >

    <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

    <div className="relative z-10 text-center">

      <FaFacebookF className="mx-auto text-6xl text-blue-500 transition duration-300 group-hover:scale-110" />

      <div className="mt-8 text-sm uppercase tracking-[0.25em] text-blue-400">
        Community
      </div>

      <h2 className="mt-5 text-3xl font-black">
        Facebook
      </h2>

      <p className="mt-4 leading-7 text-zinc-400">
        Community discussions, fan interaction and shared content.
      </p>

      <div className="mt-10 text-sm font-bold uppercase tracking-wide text-white">
        Join →
      </div>

    </div>

  </a>

  {/* STORE */}
  <a
    href="/store"
    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-[0_0_60px_rgba(255,0,0,0.18)]"
  >

    <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-red-600/10 blur-3xl" />

    <div className="relative z-10 text-center">

      <div className="mx-auto text-6xl">🏁</div>

      <div className="mt-8 text-sm uppercase tracking-[0.25em] text-red-400">
        Merchandise
      </div>

      <h2 className="mt-5 text-3xl font-black">
        GPWC Store
      </h2>

      <p className="mt-4 leading-7 text-zinc-400">
        Official GP World Cup apparel and merchandise coming soon.
      </p>

      <div className="mt-10 inline-flex rounded-full border border-red-500/30 bg-red-600/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-red-400">
        Coming Soon
      </div>

    </div>

  </a>

</div>

        {/* CONTACT */}
        <section className="mt-24">

          <div className="rounded-[2rem] border border-white/10 bg-zinc-900/70 p-10">

            <div className="text-center">

              <div className="text-sm uppercase tracking-[0.25em] text-red-400">
                Contact
              </div>

              <h2 className="mt-4 text-5xl font-black">
                Contact Us
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
                Business inquiries, collaborations and media proposals.
              </p>

            </div>

            <form
              action="https://formspree.io/f/xvzyprvz"
              method="POST"
              className="mx-auto mt-12 max-w-3xl space-y-6"
            >

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="rounded-2xl border border-white/10 bg-black/40 px-6 py-5 text-white outline-none transition focus:border-red-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="rounded-2xl border border-white/10 bg-black/40 px-6 py-5 text-white outline-none transition focus:border-red-500"
                />

              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={7}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5 text-white outline-none transition focus:border-red-500"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-red-600 px-8 py-5 text-sm font-black uppercase tracking-[0.2em] transition hover:bg-red-500"
              >
                Send Message
              </button>

            </form>

          </div>

        </section>

      </div>

    </div>
  );
}