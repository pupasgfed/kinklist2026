import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

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
              Main Website
            </a>
            <a
              href="https://www.hypnosekinky.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors text-xs sm:text-sm"
            >
              Contact
            </a>
            <a
              href="https://www.hypnosekinky.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors text-xs sm:text-sm"
            >
              Privacy
            </a>
          </div>

          <div className="flex gap-4 sm:gap-5">
            <a
              href="https://instagram.com/hypnosekinky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://twitter.com/hypnosekinky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://youtube.com/@hypnosekinky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:contact@hypnosekinky.com"
              className="text-gray-300 hover:text-brand-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        <div className="text-center mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} Hypnose Kinky. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
