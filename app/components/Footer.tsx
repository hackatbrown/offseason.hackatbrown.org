export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-purple from-40% to-transparent px-4 pb-2 pt-4 sm:px-6 sm:pb-2.5">
      <a
        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        className="font-sans text-[10px] text-white/55 underline underline-offset-2 [text-shadow:0_1px_4px_rgba(51,41,132,0.6)] transition-colors hover:text-white/85 sm:text-xs"
        target="_blank"
        rel="noopener noreferrer"
      >
        Major League Hacking Code of Conduct
      </a>
    </footer>
  );
}
