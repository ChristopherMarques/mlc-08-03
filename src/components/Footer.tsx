"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 bg-background border-t border-primary/20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center space-y-4"
            >
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-foreground/80 font-caveat text-xl px-4">
                    <span className="text-center">Com amor, para a minha mulher incrível</span>
                    <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
                    <span className="whitespace-nowrap">ass: seu preto</span>
                </div>
                <p className="text-sm text-foreground/50 font-sans">
                    16 de Novembro de 2017 ∞
                </p>
            </motion.div>
        </footer>
    );
}
