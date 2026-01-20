export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-background px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Contact
          </h2>
          <span className="text-sm uppercase tracking-[0.25em] text-muted">
            04
          </span>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <p className="text-lg leading-relaxed text-muted">
            Want to collaborate or build something new? I’m always open to
            discussing product design, web development, and creative strategy.
          </p>
          <div className="rounded-3xl border border-foreground/10 bg-surface p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-muted">
              Say hello
            </p>
            <a
              className="mt-4 inline-flex text-xl font-semibold text-foreground"
              href="mailto:hello@joeldehoog.com"
            >
              hello@joeldehoog.com
            </a>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-muted">
              <span>LinkedIn</span>
              <span>Dribbble</span>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
