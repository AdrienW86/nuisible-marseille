"use client";

import { useState, useEffect, useRef } from "react";

const videos = [
  "/video1.mp4",
  "/video2.mp4",
  "/video3.mp4",
];

export default function HeroBanner() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Changement de vidéo toutes les 10 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Synchronisation et force le play pour la vidéo active
  useEffect(() => {
    const activeVideo = videoRefs.current[currentVideo];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {
        // Gestion silencieuse si le navigateur bloque la lecture automatique
      });
    }
  }, [currentVideo]);

  return (
    <section className="relative w-full aspect-video min-h-[500px] flex items-center justify-center overflow-hidden">
      
      {/* Background Videos avec Fondu */}
      {videos.map((src, index) => (
        <video
          key={src}
          ref={(el) => { videoRefs.current[index] = el; }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentVideo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Contenu */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          Expert Dératisation <br />
          <span className="text-red-600">à Marseille</span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto mb-10">
          Intervention rapide, discrète et garantie contre tous types de nuisibles.
        </p>
        <a 
          href="tel:+33762240168" 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-xl inline-block"
        >
          Appeler le 07 62 24 01 68
        </a>
      </div>
    </section>
  );
}