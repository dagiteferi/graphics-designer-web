import { useRef } from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '@/hooks/useSmoothScroll';
import aboutPortrait from '@/assets/about-portrait.jpg';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const titleWords = "Graphic Designer & Video Editor".split(' ');

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{ backgroundImage: `url(${aboutPortrait})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          initial={{ top: '10%', left: '60%' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{ backgroundImage: `url(${aboutPortrait})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          initial={{ top: '60%', left: '10%' }}
        />
        <motion.div
          className="absolute w-24 h-24 border-2 rounded-2xl opacity-10 animate-float"
          style={{ borderColor: 'hsl(var(--primary))' }}
          initial={{ top: '20%', right: '15%', rotate: 45 }}
        />
        <motion.div
          className="absolute w-16 h-16 border-2 rounded-full opacity-10 animate-float-delayed"
          style={{ borderColor: 'hsl(var(--primary))' }}
          initial={{ bottom: '25%', left: '20%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pt-20">
        <div className="max-w-4xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hi, I'm
          </motion.p>

          {/* Name - kinetic typography */}
          <motion.h1
            className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-primary leading-[0.9] mb-6"
          >
            {"Samuel Teferi".split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Role - word by word */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-8">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.9 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-display text-2xl md:text-3xl lg:text-4xl font-semibold ${
                  word === '&' ? 'text-muted-foreground' : 'text-primary/70'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
          >
            I craft powerful visual stories through creative design and cinematic video editing.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection('works')}
              className="px-8 py-4 bg-primary text-primary-foreground font-body font-medium rounded-full hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 glass-card font-body font-medium text-primary rounded-full hover:scale-105 transition-transform duration-200"
            >
              Hire Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
