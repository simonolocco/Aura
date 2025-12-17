import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Experiencia', href: '#experiencia' },
        { name: 'Contacto', href: '#contacto' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'glass py-4 text-[var(--color-text)]'
                : 'bg-transparent py-6 text-white'
                }`}
        >
            <div className="container flex justify-between items-center">
                <a href="#" className={`text-2xl font-serif tracking-widest font-medium flex items-center gap-2 ${isScrolled ? 'text-[var(--color-text)]' : 'text-white'}`}>
                    AURA
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-sm uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors ${isScrolled ? 'text-[var(--color-text-light)]' : 'text-white/90'}`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button className={`btn-primary ${!isScrolled && 'bg-white text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white border-none'}`}>
                        Reservar Cita
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu size={24} color={isScrolled ? 'currentColor' : 'white'} />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="fixed inset-0 bg-[var(--color-bg)] z-50 flex flex-col items-center justify-center gap-8"
                    >
                        <button
                            className="absolute top-6 right-6 p-2 text-[var(--color-text)] hover:rotate-90 transition-transform duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        <a href="#" className="text-4xl font-serif mb-4 text-[var(--color-primary)]">AURA</a>
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-2xl font-light font-serif text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button className="btn-primary mt-8 px-10 py-3 text-lg">Reservar Ahora</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
