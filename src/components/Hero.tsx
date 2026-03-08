"use client";

import { motion, Variants } from "framer-motion";

export function Hero() {
    const text = "Maria Larissa";

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.5 * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.8,
            filter: "blur(10px)",
        },
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
            <div className="absolute inset-0 z-0 overflow-hidden flex flex-col items-center justify-center bg-background">
                {/* Responsive Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-[1.15] md:scale-[1.3] transform origin-center pointer-events-none select-none"
                >
                    <source src="/video-hero-v2.mp4" type="video/mp4" />
                </video>

                {/* Decorative dark overlay to ensure text is readable */}
                <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] z-10" />
            </div>

            <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto space-y-6">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center overflow-hidden"
                >
                    {text.split("").map((word, index) => (
                        <motion.span
                            variants={child}
                            key={index}
                            className={`font-fleur text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider text-primary drop-shadow-md ${word === " " ? "mr-3 md:mr-6" : ""}`}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                    className="text-2xl sm:text-2xl md:text-4xl text-foreground font-caveat font-medium drop-shadow-sm px-4"
                >
                    A essência de toda força e delicadeza.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8, duration: 1, ease: "easeOut" }}
                    className="text-2xl sm:text-xl md:text-2xl text-foreground/80 max-w-2xl font-caveat mt-2 md:mt-4 px-4"
                >
                    Neste Dia Internacional das Mulheres, celebro a mulher extraordinária que você é.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3.5, type: "spring", stiffness: 200, damping: 10 }}
                    className="pt-8"
                >
                    <a href="#historia" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-caveat text-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Nossa História
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
