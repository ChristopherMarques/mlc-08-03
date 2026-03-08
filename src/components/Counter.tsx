"use client";

import { useEffect, useState } from "react";
import { differenceInDays, differenceInYears, differenceInMonths } from "date-fns";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Counter() {
    const [mounted, setMounted] = useState(false);
    const startDate = new Date(2017, 10, 16); // Month is 0-indexed in JS dates

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const today = new Date();
    const totalDays = differenceInDays(today, startDate);
    const years = differenceInYears(today, startDate);

    // Calculate remaining months and days roughly for display
    const dateAfterYears = new Date(startDate);
    dateAfterYears.setFullYear(startDate.getFullYear() + years);
    const months = differenceInMonths(today, dateAfterYears);

    if (!mounted) return null;

    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden" id="historia">
            <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="bg-background/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-primary/10"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2
                        }}
                        className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-fleur text-primary mb-6">Nosso Tempo</h2>

                    <p className="text-xl md:text-2xl font-caveat text-foreground/80 mb-8 max-w-2xl mx-auto">
                        Desde o dia 16/11/2017, que por coincidência (ou destino) era meu aniversário, minha vida mudou pra melhor. Cada dia que passa é mais colorido ao seu lado.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-primary/20">
                        <div className="flex flex-col items-center">
                            <span className="text-5xl md:text-6xl font-black text-primary drop-shadow-sm font-sans tracking-tight">
                                {totalDays}
                            </span>
                            <span className="text-lg font-caveat text-foreground/70 uppercase tracking-widest mt-2">Dias de Nós</span>
                        </div>

                        <div className="flex flex-col items-center relative">
                            <span className="text-5xl md:text-6xl font-black text-primary drop-shadow-sm font-sans tracking-tight">
                                {years}
                            </span>
                            <span className="text-lg font-caveat text-foreground/70 uppercase tracking-widest mt-2">Anos de implicancia</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-5xl md:text-6xl font-black text-primary drop-shadow-sm font-sans tracking-tight">
                                {months}
                            </span>
                            <span className="text-lg font-caveat text-foreground/70 uppercase tracking-widest mt-2">Meses pra te grudar</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative background elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-[100px] -z-1"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-[120px] -z-1"
            />
        </section>
    );
}
