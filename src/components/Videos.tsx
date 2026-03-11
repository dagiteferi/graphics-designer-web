import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play } from 'lucide-react';

import videoMusic from '@/assets/video-music.jpg';
import videoYoutube from '@/assets/video-youtube.jpg';
import videoCommercial from '@/assets/video-commercial.jpg';
import videoReel from '@/assets/video-reel.jpg';
import videoCorporate from '@/assets/video-corporate.jpg';

const videos = [
  { image: videoMusic, title: 'Music Video Editing', desc: 'Cinematic music video production' },
  { image: videoYoutube, title: 'YouTube Content', desc: 'Engaging video content creation' },
  { image: videoCommercial, title: 'Commercial Ad', desc: 'Professional advertisement editing' },
  { image: videoReel, title: 'Instagram Reels', desc: 'Short-form social content' },
  { image: videoCorporate, title: 'Corporate Promo', desc: 'Business promotional videos' },
];

const Videos = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="videos" className="section-padding bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title mb-4">Video Work</h2>
          <p className="section-subtitle">Cinematic editing and motion design that brings stories to life.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-video glass-card"
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/20">
                <div className="play-button w-16 h-16 rounded-full flex items-center justify-center text-primary-foreground">
                  <Play size={28} fill="currentColor" />
                </div>
              </div>
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 work-card-overlay">
                <h3 className="font-display font-bold text-primary-foreground text-lg">{video.title}</h3>
                <p className="font-body text-primary-foreground/70 text-sm">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
