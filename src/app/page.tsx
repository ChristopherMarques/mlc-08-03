"use client";

import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Counter } from "@/components/Counter";
import { Gallery } from "@/components/Gallery";
import { Manifesto } from "@/components/Manifesto";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground relative overflow-x-hidden w-full">
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="w-full h-full">
          <Hero />
          <div className="relative z-20 bg-background">
            <Counter />
            <Gallery />
            <Manifesto />
            <Footer />
          </div>
        </div>
      )}
    </main>
  );
}
