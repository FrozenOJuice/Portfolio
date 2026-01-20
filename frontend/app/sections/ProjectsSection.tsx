const projects = [
  {
    name: "Signal",
    description:
      "AI operations dashboard that surfaces actionable insights for support teams.",
    tags: ["Product design", "Next.js", "Data viz"],
  },
  {
    name: "Harbor",
    description:
      "Story-driven marketing site for a climate startup, focused on conversion.",
    tags: ["Brand", "Webflow", "Motion"],
  },
  {
    name: "Northbound",
    description:
      "Mobile-first hiring platform with structured onboarding and ATS sync.",
    tags: ["UX strategy", "React Native", "Design system"],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-foreground/10 bg-surface px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Projects
          </h2>
          <span className="text-sm uppercase tracking-[0.25em] text-muted">
            03
          </span>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex h-full flex-col rounded-3xl border border-foreground/10 bg-surface p-6 transition hover:-translate-y-1 hover:border-foreground/30"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {project.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-foreground/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-8 text-xs uppercase tracking-[0.25em] text-accent">
                View case study →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
