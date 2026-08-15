import Link from "next/link";
import HeroBanner from "@/components/Banner";
import IntroSection from "@/components/Intro";

export default function Home() {
  const services = [
    { title: "Dératisation", desc: "Élimination des rats et souris", icon: "🐀", href: "/deratisation" },
    { title: "Punaises de lit", desc: "Traitement complet et éradication", icon: "🪲", href: "/punaises" },
    { title: "Cafards & Blattes", desc: "Désinsectisation ciblée", icon: "🪳", href: "/cafards" },
    { title: "Dépigeonnage", desc: "Protection et pose de pics", icon: "🐦", href: "/pigeons" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Bannière Hero pleine largeur */}
      <HeroBanner />

      {/* Contenu principal */}
      <main className="container mx-auto max-w-4xl px-6 py-16">
        <IntroSection />

        {/* Section Services */}
        <section id="services" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-zinc-950 dark:text-zinc-50 border-l-4 border-red-600 pl-4">
            Nos Spécialités
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link 
                key={service.title} 
                href={service.href}
                className="group p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-red-600 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-zinc-950 dark:text-zinc-50 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {service.desc}
                  </p>
                </div>
                
                <span className="mt-4 text-xs font-semibold text-red-600 dark:text-red-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  En savoir plus &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Section Contact rapide */}
        <section id="contact" className="text-center bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Besoin d'une intervention urgente ?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Nos techniciens interviennent 7j/7 dans tous les arrondissements de Marseille et ses environs.
          </p>
          <a 
            href="tel:+33762240168" 
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-red-600/20"
          >
            <span>Appeler le 07 62 24 01 68</span>
          </a>
        </section>

      </main>
    </div>
  );
}