import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import workBrand from '@/assets/work-brand-identity.jpg';
import workLogo from '@/assets/work-logo-design.jpg';
import workPoster from '@/assets/work-poster.jpeg';
import workSocial from '@/assets/work-social-media.jpg';
import workPackaging from '@/assets/work-packaging.jpg';

const designs = [
  { image: workLogo, title: 'Logo Design', span: 'col-span-1 row-span-1' },
  { image: workBrand, title: 'Brand Identity', span: 'col-span-1 row-span-2 sm:row-span-2' },
  { image: workPoster, title: 'Poster Design', span: 'col-span-1 row-span-1' },
  { image: workSocial, title: 'Social Media Campaign', span: 'col-span-1 sm:col-span-2 row-span-1' },
  { image: workPackaging, title: 'Packaging Design', span: 'col-span-1 row-span-1' },
];

const Designs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="designs" className="section-padding">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title mb-4">Design Showcase</h2>
          <p className="section-subtitle">Visual creativity across branding, print, and digital design.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-5">
          {designs.map((design, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden ${design.span}`}
            >
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 work-card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="font-display font-bold text-primary-foreground text-xl">{design.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Designs;
