import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutPortrait from '@/assets/about-portrait.jpg';

const tools = [
  { name: 'Photoshop', icon: 'Ps' },
  { name: 'Illustrator', icon: 'Ai' },
  { name: 'Premiere Pro', icon: 'Pr' },
  { name: 'After Effects', icon: 'Ae' },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title mb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden glass-card p-2">
              <img
                src={aboutPortrait}
                alt="Samuel - Graphic Designer & Video Editor"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              I am a passionate graphic designer and video editor specializing in brand visuals, 
              motion graphics, and engaging video content. With over 8 years of experience, 
              I transform ideas into compelling visual narratives that captivate audiences and 
              elevate brands.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              From crafting bold brand identities to editing cinematic video content, 
              I bring a meticulous eye for detail and a deep understanding of visual storytelling 
              to every project.
            </p>

            {/* Tools */}
            <div>
              <h3 className="font-display text-lg font-semibold text-primary mb-5">Tools I Use</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="glass-card p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-200"
                  >
                    <span className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                      {tool.icon}
                    </span>
                    <span className="font-body text-xs text-muted-foreground text-center">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
