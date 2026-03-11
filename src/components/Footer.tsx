import { scrollToSection } from '@/hooks/useSmoothScroll';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <button
          onClick={() => scrollToSection('home')}
          className="font-display text-2xl font-bold tracking-tight"
        >
          Studio<span className="opacity-50">.</span>
        </button>
        <p className="font-body text-sm text-primary-foreground/60">
          © 2026 Samuel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
