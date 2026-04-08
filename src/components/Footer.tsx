import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-mid mt-auto">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            <a
              href="https://www.hypnosekinky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors font-semibold text-xs sm:text-sm"
            >
              Visiter hypnosekinky.com
            </a>
            <a
              href="https://www.hypnosekinky.com/newsletter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors text-xs sm:text-sm"
            >
              Newsletter
            </a>
            <a
              href="https://www.hypnosekinky.com/mentions-legales"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors text-xs sm:text-sm"
            >
              Mentions Legales
            </a>
          </div>

          <div className="flex gap-4 sm:gap-5">
            <a
              href="https://www.instagram.com/pupasgfed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://twitter.com/pupasgfed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.hypnosekinky.com/newsletter"
              className="text-gray-300 hover:text-brand-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        <div className="text-center mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} kinklist hypnose - @pupasgfed - tous le
          détails sur hypnosekinky.com
        </div>
      </div>
    </footer>
  );
}
