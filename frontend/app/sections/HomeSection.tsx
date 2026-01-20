export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center overflow-hidden border-b border-foreground/10 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <div className="flex max-w-3xl flex-col gap-6">
          <h1 className="font-display text-5xl leading-tight text-foreground sm:text-6xl lg:text-7xl">
            Joel de Hoog
          </h1>
          <p className="text-lg leading-relaxed text-muted sm:text-xl">
            Computer Science Student | Developer | Active Learner
          </p>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.32em] text-accent shadow-[0_10px_30px_rgba(239,127,58,0.15)] transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
          >
            Projects
          </a>
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/FrozenOJuice"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-xl text-foreground/70 transition hover:bg-[#181717] hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7 fill-current"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.38 6.84 9.74.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.63-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.16-4.56-5.16 0-1.14.39-2.08 1.02-2.82-.1-.26-.44-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.91-1.32 2.75-1.05 2.75-1.05.54 1.43.2 2.49.1 2.75.63.74 1.01 1.68 1.01 2.82 0 4.01-2.34 4.9-4.57 5.16.36.32.69.94.69 1.9 0 1.37-.01 2.48-.01 2.82 0 .26.18.58.69.48A10.2 10.2 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/joel-dehoog-815230293/"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-xl text-foreground/70 transition hover:bg-[#0A66C2] hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7 fill-current"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM.5 8.98h4V23h-4V8.98Zm7.5 0h3.83v1.91h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.2c0-1.48-.02-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27V23h-4V8.98Z" />
            </svg>
          </a>
          <a
            href="mailto:joel.dehoog@gmail.com"
            aria-label="Email"
            className="flex h-12 w-12 items-center justify-center rounded-xl text-foreground/70 transition hover:bg-accent hover:text-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
            >
              <path d="M3 5h18a2 2 0 0 1 2 2v.35l-11 6.47-11-6.47V7a2 2 0 0 1 2-2Zm20 4.17V19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9.17l10.49 6.17a1 1 0 0 0 1.02 0L23 9.17Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
