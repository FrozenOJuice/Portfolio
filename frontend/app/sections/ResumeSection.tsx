const experience = [
  {
    role: "Lead Product Designer",
    company: "Atlas Studio",
    period: "2021 — Now",
    detail:
      "Directed cross-functional teams to build a modular design system and customer onboarding flows.",
  },
  {
    role: "Senior Frontend Engineer",
    company: "Lumen Labs",
    period: "2018 — 2021",
    detail:
      "Delivered React platforms with a focus on performance, accessibility, and cohesive UI motion.",
  },
  {
    role: "Design Engineer",
    company: "Freelance",
    period: "2013 — 2018",
    detail:
      "Partnered with startups to validate product strategy and launch MVPs.",
  },
];

const skills = [
  "Product strategy",
  "Design systems",
  "Next.js + React",
  "UI motion",
  "Brand identity",
  "Prototyping",
];

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="scroll-mt-24 border-b border-foreground/10 bg-background px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Resume
          </h2>
          <span className="text-sm uppercase tracking-[0.25em] text-muted">
            02
          </span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={`${item.role}-${item.company}`}
                className="rounded-3xl border border-foreground/10 bg-surface p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{item.company}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-surface p-6">
            <h3 className="text-lg font-semibold text-foreground">Skills</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.map((skill) => (
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
