export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-foreground/10 bg-surface px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center">
        <div className="flex w-full flex-col items-center gap-3">
          <span className="text-sm uppercase tracking-[0.25em] text-muted">
            01
          </span>
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            About
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            I am a computer science student who enjoys turning ideas into
            thoughtful digital experiences. I like building clean interfaces,
            learning new technologies, and collaborating with people who care
            about the details.
          </p>
        </div>
        <div className="grid w-full gap-6 text-left lg:grid-cols-2">
          <div className="rounded-3xl border border-foreground/10 bg-background/80 p-6">
            <h3 className="text-lg font-semibold text-foreground">
              What I want next
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              I want to work on impactful products where I can grow as a
              software engineer, deepen my systems knowledge, and ship features
              that make people’s lives easier.
            </p>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-background/80 p-6">
            <h3 className="text-lg font-semibold text-foreground">Skills</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {[
                "TypeScript",
                "React + Next.js",
                "Node.js",
                "APIs",
                "UI design",
                "Problem solving",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-foreground/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
