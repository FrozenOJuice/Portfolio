export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-foreground/10 bg-surface px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            About
          </h2>
          <span className="text-sm uppercase tracking-[0.25em] text-muted">
            01
          </span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <p className="text-lg leading-relaxed text-muted">
            I help teams shape product narratives, translate vision into
            prototypes, and ship polished interfaces. My background spans
            design systems, brand storytelling, and full-stack engineering.
          </p>
          <div className="rounded-3xl border border-foreground/10 bg-surface p-6 text-sm text-muted">
            <p className="text-foreground">
              Highlights
            </p>
            <ul className="mt-4 space-y-3">
              <li>10+ years crafting web experiences</li>
              <li>Led product design for SaaS platforms</li>
              <li>Partnered with founders on MVP launches</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
