"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Photo {
    src: string;
    desc: string;
    rotate: number;
}

function PhotoCard({ photo, index, cardVariants }: { photo: Photo, index: number, cardVariants: any }) {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
                scale: 1.05,
                rotate: 0,
                z: 20,
                transition: { duration: 0.3 }
            }}
            style={{ rotate: photo.rotate }}
            className="bg-white p-4 pb-12 shadow-xl hover:shadow-2xl rounded-sm transition-shadow transform origin-center border border-gray-100 cursor-pointer"
            onClick={() => setIsRevealed(true)}
        >
            <div className="aspect-square bg-gray-200 overflow-hidden mb-4 relative rounded-sm">
                <AnimatePresence>
                    {!isRevealed && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.2 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0 z-10 bg-primary flex flex-col items-center justify-center text-primary-foreground p-4 text-center"
                            style={{
                                backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.15\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')"
                            }}
                        >
                            <span className="font-caveat text-4xl mb-2 drop-shadow-sm">Surpresa!</span>
                            <span className="font-sans text-[10px] tracking-[0.2em] font-bold uppercase opacity-90 drop-shadow-sm">Clique p/ revelar</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={photo.src}
                    alt={photo.desc}
                    className={`w-full h-full object-cover select-none transition-all duration-1000 ${!isRevealed ? "scale-125 blur-sm grayscale" : "scale-100 blur-0 grayscale-0"
                        }`}
                />
            </div>

            <p className="font-caveat text-2xl text-center text-gray-800 transition-opacity duration-700">
                {isRevealed ? photo.desc : "???"}
            </p>
        </motion.div>
    );
}

export function Gallery() {
    // Configured placeholder blocks where user can put photos
    const photos: Photo[] = [
        { src: "fotos/inicio.jpeg", desc: "Depois de você, saio sorrindo nas fotos...", rotate: -4 },
        { src: "fotos/meu-sol.jpg", desc: "A vida ganhou mais cor, com meu sol...", rotate: 2 },
        { src: "fotos/beleza.png", desc: "Ainda vai receber muitos desse!", rotate: -2 },
        { src: "fotos/beleza-02.png", desc: "Minha casa, minha paz!", rotate: 4 },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: (index = 0) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: index * 0.2,
                type: "spring" as const,
                stiffness: 100
            }
        }),
    };

    return (
        <section className="py-32 bg-background relative" id="galeria">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-fleur text-primary"
                    >
                        Nossos Momentos
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-caveat text-foreground/70 mt-4 max-w-lg mx-auto"
                    >
                        Cada momento com você é uma benção, e agradeço a Deus por cada momento vivido e que ainda viveremos.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {photos.map((photo, index) => (
                        <PhotoCard
                            key={index}
                            photo={photo}
                            index={index}
                            cardVariants={cardVariants}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
