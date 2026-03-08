"use client";

import { motion } from "framer-motion";

export function Manifesto() {
    const manifesto = "Mozão, sua presença transforma o cotidiano em poesia. Sua força não precisa de gritos; ela se manifesta na sua resiliência, no seu sorriso e na forma como você ilumina quem está ao seu redor. Hoje o mundo celebra as mulheres, mas meu coração celebra você todos os dias.";

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.2
            }
        }
    };

    const wordAnim = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200 } }
    };

    const words = manifesto.split(" ");

    return (
        <section className="py-32 relative bg-primary text-primary-foreground overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center items-center"
                >
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            variants={wordAnim}
                            className="font-caveat text-3xl md:text-5xl leading-relaxed mx-[0.3em] font-medium tracking-wide drop-shadow-sm"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />
        </section>
    );
}
