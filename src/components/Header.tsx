export default function Header() {
  return (
    <header className="bg-brand-dark border-b border-brand-mid">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-brand-accent">
          Mes préférences hypnotiques
        </div>
        <nav className="flex gap-6">
          <a
            href="https://linktr.ee/hypnosekinky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-brand-accent transition-colors text-sm md:text-base"
          >
            All my links
          </a>
          <a
            href="https://www.hypnosekinky.com/book-a-session"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-brand-accent transition-colors text-sm md:text-base"
          >
            Book a session
          </a>
          <a
            href="https://www.hypnosekinky.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-brand-accent transition-colors text-sm md:text-base"
          >
            About me
          </a>
        </nav>
      </div>
    </header>
  );
}
