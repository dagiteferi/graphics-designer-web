import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import workBrand from '@/assets/work-brand-identity.jpg';
import workLogo from '@/assets/work-logo-design.jpg';
import workPoster from '@/assets/work-poster.jpeg';
import workSocial from '@/assets/work-social-media.jpg';
import workVideo from '@/assets/work-video-editing.jpg';
import workPackaging from '@/assets/work-packaging.jpg';

interface Project {
  image: string;
  title: string;
  category: string;
}

const row1: Project[] = [
  { image: workBrand, title: 'Luxe Brand System', category: 'Brand Identity' },
  { image: workVideo, title: 'Cinematic Promo', category: 'Video Editing' },
  { image: workPoster, title: 'Festival Campaign', category: 'Poster Design' },
  { image: workSocial, title: 'Social Surge', category: 'Social Media Graphics' },
  { image: workLogo, title: 'Mark Collection', category: 'Logo Design' },
  { image: workPackaging, title: 'Aura Cosmetics', category: 'Packaging Design' },
];

const row2: Project[] = [
  { image: workLogo, title: 'Typographic Marks', category: 'Logo Design' },
  { image: workPackaging, title: 'Organic Essentials', category: 'Packaging Design' },
  { image: workBrand, title: 'Nova Identity', category: 'Brand Identity' },
  { image: workPoster, title: 'Art Basel Poster', category: 'Poster Design' },
  { image: workVideo, title: 'Product Launch', category: 'Video Editing' },
  { image: workSocial, title: 'Viral Campaign', category: 'Social Media Graphics' },
];

const row3: Project[] = [
  { image: workSocial, title: 'Digital Stories', category: 'Social Media Graphics' },
  { image: workBrand, title: 'Apex Rebrand', category: 'Brand Identity' },
  { image: workPackaging, title: 'Premium Tea', category: 'Packaging Design' },
  { image: workLogo, title: 'Geometric Marks', category: 'Logo Design' },
  { image: workPoster, title: 'Music Festival', category: 'Poster Design' },
  { image: workVideo, title: 'Documentary Edit', category: 'Video Editing' },
];

const WorkCard = ({ project }: { project: Project }) => (
  <div className="relative flex-shrink-0 w-[300px] md:w-[380px] h-[240px] md:h-[280px] rounded-2xl overflow-hidden group cursor-pointer">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
    <div className="absolute inset-0 work-card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <p className="text-primary-foreground/70 text-sm font-body">{project.category}</p>
      <h3 className="text-primary-foreground text-lg font-display font-bold">{project.title}</h3>
    </div>
    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/0 group-hover:ring-primary/20 transition-all duration-300" />
  </div>
);

const MarqueeRow = ({ projects, direction }: { projects: Project[]; direction: 'left' | 'right' }) => {
  const doubled = [...projects, ...projects];
  return (
    <div className="relative overflow-hidden py-3">
      <div className={`flex gap-6 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((project, i) => (
          <WorkCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="works" className="py-20 md:py-32 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4">Featured Works</h2>
          <p className="section-subtitle">A curated selection of projects spanning brand identity, motion graphics, and visual storytelling.</p>
        </motion.div>
      </div>

      <div className="space-y-2">
        <MarqueeRow projects={row1} direction="left" />
        <MarqueeRow projects={row2} direction="right" />
        <MarqueeRow projects={row3} direction="left" />
      </div>
    </section>
  );
};

export default Works;
