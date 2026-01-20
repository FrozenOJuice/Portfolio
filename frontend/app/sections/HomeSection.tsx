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
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-accent-strong"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition hover:border-foreground/50"
          >
            Let’s Talk
          </a>
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-xl text-foreground/70 transition hover:bg-[#181717] hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.38 6.84 9.74.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.63-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.16-4.56-5.16 0-1.14.39-2.08 1.02-2.82-.1-.26-.44-1.32.1-2.75 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.91-1.32 2.75-1.05 2.75-1.05.54 1.43.2 2.49.1 2.75.63.74 1.01 1.68 1.01 2.82 0 4.01-2.34 4.9-4.57 5.16.36.32.69.94.69 1.9 0 1.37-.01 2.48-.01 2.82 0 .26.18.58.69.48A10.2 10.2 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-xl text-foreground/70 transition hover:bg-[#0A66C2] hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
            >
              <path d="M4.98 3.5c0 1.38-1.11 2.5-2.49 2.5A2.5 2.5 0 0 1 0 3.5C0 2.12 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 23.5h4V7.98h-4V23.5ZM8.5 7.98h3.84v2.12h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.2v7.3h-4v-6.46c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.68-2.48 3.41v6.57h-4V7.98Z" />
            </svg>
          </a>
          <a
            href="https://x.com/"
            aria-label="X"
            className="flex h-12 w-12 items-center justify-center rounded-xl text-foreground/70 transition hover:bg-black hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current"
            >
              <path d="M18.9 2H22l-7.33 8.38L23 22h-6.57l-5.14-6.63L5.5 22H2l7.86-9-7.5-11h6.74l4.65 6.03L18.9 2Zm-1.15 17.96h1.82L7.3 4h-1.9l12.35 15.96Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
