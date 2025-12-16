import { motion } from 'framer-motion';
import { Sparkles, Flower2, Heart, Sun } from 'lucide-react';

const services = [
    {
        icon: <Flower2 size={32} />,
        title: "Faciales Premium",
        description: "Tratamientos personalizados para rejuvenecer y vitalizar tu piel con productos orgánicos de alta gama.",
        price: "Desde $80"
    },
    {
        icon: <Sparkles size={32} />,
        title: "Masajes Terapéuticos",
        description: "Técnicas ancestrales y modernas para liberar tensión y restaurar el equilibrio energético.",
        price: "Desde $65"
    },
    {
        icon: <Sun size={32} />,
        title: "Tratamientos Corporales",
        description: "Exfoliaciones, envolturas y aparatología de última generación para moldear tu figura.",
        price: "Desde $120"
    },
    {
        icon: <Heart size={32} />,
        title: "Rituales de Pareja",
        description: "Experiencias compartidas en nuestra suite privada con jacuzzi y ambientación romántica.",
        price: "Desde $180"
    }
];

export const Services = () => {
    return (
        <section id="servicios" className="section-padding bg-[var(--color-bg)] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E7E5E4]/40 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

            <div className="container relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--color-secondary)] mb-4">Experiencias Únicas</h2>
                    <h3 className="title-md font-serif text-4xl md:text-5xl text-[var(--color-text)]">Menú de <span className="italic text-[var(--color-primary)]">Servicios</span></h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white border border-transparent hover:border-[var(--color-primary)]/20 p-8 rounded-2xl shadow-sm hover:shadow-xl cursor-pointer overflow-hidden h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-16 h-16 bg-[var(--color-bg)] rounded-full flex items-center justify-center mb-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                                    {service.icon}
                                </div>
                                <h4 className="font-serif text-2xl mb-3 text-[var(--color-text)]">{service.title}</h4>
                                <p className="text-[var(--color-secondary)] text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                                    <span className="text-[var(--color-primary)] font-medium">{service.price}</span>
                                    <span className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-[var(--color-text)] transition-colors">Reservar &rarr;</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
