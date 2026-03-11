import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Works from '@/components/Works';
import Videos from '@/components/Videos';
import Designs from '@/components/Designs';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Works />
      <Videos />
      <Designs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
