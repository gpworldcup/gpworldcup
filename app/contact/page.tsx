export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-3xl">

        <a
          href="/"
          className="mb-10 inline-block text-red-500 hover:text-red-400"
        >
          ← Back
        </a>

        <div className="mb-14 text-center">

          <div className="text-sm uppercase tracking-[0.25em] text-red-400">
            Contact
          </div>

          <h1 className="mt-4 text-5xl font-black md:text-7xl">
            GET IN TOUCH
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Interested in GP World Cup?
            Partnerships, media, investment or collaboration inquiries are welcome.
          </p>

        </div>

        <form
          action="https://formspree.io/f/xvzyprvz"
          method="POST"
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded-2xl border border-white/10 bg-zinc-900 px-6 py-5 text-white outline-none transition focus:border-red-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-2xl border border-white/10 bg-zinc-900 px-6 py-5 text-white outline-none transition focus:border-red-500"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={8}
            className="w-full rounded-2xl border border-white/10 bg-zinc-900 px-6 py-5 text-white outline-none transition focus:border-red-500"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-red-600 px-8 py-5 text-lg font-bold uppercase transition hover:bg-red-500"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}