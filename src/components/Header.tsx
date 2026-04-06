export default function Header() {
  return (
    <header className="bg-brand-dark border-b border-brand-mid">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-brand-accent text-center sm:text-left">
          Mes préférences hypnotiques
        </div>
        <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <a
            href="https://linktr.ee/hypnosekinky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-brand-accent transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            All my links
          </a>
          <a
            href="https://www.hypnosekinky.com/book-a-session"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-brand-accent transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            Book a session
          </a>
          <a
            href="https://www.hypnosekinky.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-brand-accent transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
          >
            About me
          </a>
        </nav>
      </div>
    </header>
  );
}
