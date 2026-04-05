import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-mid mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-6">
            <a
              href="https://www.hypnosekinky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors font-semibold"
            >
              Main Website
            </a>
            <a
              href="https://www.hypnosekinky.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors"
            >
              Contact
            </a>
            <a
              href="https://www.hypnosekinky.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors"
            >
              Privacy
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/hypnosekinky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://twitter.com/hypnosekinky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://youtube.com/@hypnosekinky"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-brand-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="mailto:contact@hypnosekinky.com"
              className="text-gray-300 hover:text-brand-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-gray-400 text-sm">
          © {new Date().getFullYear()} Hypnose Kinky. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
