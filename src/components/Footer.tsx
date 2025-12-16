import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#1C1917] text-white py-16 border-t border-white/10">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-2">
                    <a href="#" className="text-3xl font-serif tracking-widest mb-6 block text-[var(--color-primary)]">AURA</a>
                    <p className="text-gray-400 max-w-sm mb-6 font-light">
                        Un refugio urbano diseñado para reconectar tu cuerpo y mente.
                        Tecnología de vanguardia en un ambiente de paz absoluta.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-all">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-serif mb-6 text-[var(--color-primary)]">Enlaces</h4>
                    <ul className="space-y-4 text-gray-400 font-light text-sm">
                        <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                        <li><a href="#servicios" className="hover:text-white transition-colors">Tratamientos</a></li>
                        <li><a href="#experiencia" className="hover:text-white transition-colors">La Experiencia</a></li>
                        <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-serif mb-6 text-[var(--color-primary)]">Contacto</h4>
                    <ul className="space-y-4 text-gray-400 font-light text-sm">
                        <li>Av. Libertador 1234, Buenos Aires</li>
                        <li>+54 11 4567 8901</li>
                        <li>info@aurespa.com</li>
                        <li className="pt-4">
                            <span className="block text-white mb-1">Horarios</span>
                            Lun - Sab: 8:00 - 20:00<br />Dom: 10:00 - 18:00
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-xs tracking-wider">
                &copy; {new Date().getFullYear()} AURA Wellness. Todos los derechos reservados.
            </div>
        </footer>
    );
};
