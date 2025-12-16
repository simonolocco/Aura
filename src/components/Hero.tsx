import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.png';

export const Hero = () => {
    return (
        <section id="inicio" className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Spa Interior"
                    className="w-full h-full object-cover animate-pan-slow" // We can add a custom keyframe animation for slow pan later if desired, for now object-cover is static but good
                />
                <div className="absolute inset-0 bg-black/30" /> {/* Dim overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[var(--color-bg)]" />
            </div>

            {/* Content */}
            <div className="container relative z-10 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.span
                        className="uppercase tracking-[0.3em] text-xs md:text-sm font-medium mb-6 block text-white/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Bienestar & Estética Integral
                    </motion.span>

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-8 text-white leading-tight">
                        Armonía <span className="italic text-[var(--color-primary)] block md:inline font-light">Natural</span>
                    </h1>

                    <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 mb-12 font-light leading-relaxed tracking-wide">
                        Descubre un espacio donde la ciencia estética se une con la relajación profunda para revelar tu mejor versión.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-full hover:bg-[#b08d45] transition-colors shadow-lg text-lg min-w-[200px]"
                        >
                            Nuestros Servicios
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 rounded-full border border-white/40 backdrop-blur-md text-white hover:bg-white/10 transition-colors text-lg min-w-[200px]"
                        >
                            Reservar Cita
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
};
