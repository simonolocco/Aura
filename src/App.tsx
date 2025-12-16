import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
import gallery1 from './assets/gallery_1.png';
import gallery2 from './assets/gallery_2.png';
import gallery3 from './assets/gallery_3.png';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      <Hero />
      <Services />
      <div id="experiencia" className="py-20 bg-[#F5F5F4] text-center">
        <div className="container">
          <h2 className="font-serif text-3xl mb-4 text-[var(--color-text)]">El Espacio</h2>
          <p className="text-[var(--color-secondary)] max-w-2xl mx-auto mb-8 font-light">
            Diseñado con materiales nobles y una acústica cuidada para garantizar tu desconexión total desde el primer momento.
          </p>
          {/* Visual placeholder for gallery */}
          {/* Gallery with Framer Motion */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-lg group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={gallery1} alt="Recepción" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </motion.div>

            <motion.div
              className="relative h-full w-full md:col-span-2 overflow-hidden rounded-lg group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src={gallery2} alt="Sala de Masajes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </motion.div>

            <motion.div
              className="relative h-full w-full overflow-hidden rounded-lg group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img src={gallery3} alt="Detalles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
