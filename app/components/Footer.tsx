export default function Footer() {
  const linkClass = "font-sans text-[10px] text-white/55 underline underline-offset-2 [text-shadow:0_1px_4px_rgba(51,41,132,0.6)] transition-colors hover:text-white/85 sm:text-xs";
  const textClass = "font-sans text-[10px] text-white/55 [text-shadow:0_1px_4px_rgba(51,41,132,0.6)] sm:text-xs";

  return (
    <footer className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-purple from-40% to-transparent px-4 pb-2 pt-4 sm:px-6 sm:pb-2.5">
      <p className={textClass}>
        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" className={linkClass} target="_blank" rel="noopener noreferrer">
          Major League Hacking Code of Conduct
        </a>
        {" / Interested in sponsoring? Reach out to us at "}
        <a href="mailto:sponsor@hackatbrown.org" className={linkClass} target="_blank" rel="noopener noreferrer">
          sponsor@hackatbrown.org
        </a>
      </p>
    </footer>
  );
}
