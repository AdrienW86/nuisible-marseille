import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function CafardsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Image de fond fixe et responsive */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/cafards-banner.jpeg"
          alt="Traitement cafards et blattes Marseille"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay pour assombrir l'image et rendre le texte parfaitement lisible */}
        <div className="absolute inset-0 bg-zinc-50/90 dark:bg-black/80" />
      </div>

      {/* Contenu principal */}
      <main className="relative z-10 container mx-auto max-w-4xl px-6 py-16">
        
        {/* Titre SEO */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-500">
            Intervention Rapide 7j/7
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 mt-2 tracking-tight">
            Traitement et éradication des <span className="text-red-600">cafards et blattes à Marseille</span>
          </h1>
        </div>

        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10 leading-relaxed">
          Les cafards et blattes prolifèrent très rapidement dans les cuisines, salles de bain et locaux professionnels. 
          Nous appliquons des méthodes professionnelles à fort effet rémanent pour éliminer définitivement les colonies et stopper les risques de contamination.
        </p>

        {/* Section Risques & Méthodes */}
        <div className="mb-12 space-y-8">
          <div className="bg-white/80 dark:bg-zinc-900/80 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Pourquoi les cafards représentent un danger ?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
              <li><strong>Risques sanitaires majeurs :</strong> Vecteurs de bactéries (salmonellose, gastro-entérite, E. coli).</li>
              <li><strong>Allergies et asthme :</strong> Leurs déjections et mues provoquent de fortes réactions allergiques.</li>
              <li><strong>Prolifération invisible :</strong> Insectes nocturnes se cachant derrière l'électroménager, les moteurs et les plinthes.</li>
            </ul>
          </div>

          <div className="bg-red-50/80 dark:bg-red-900/20 p-8 rounded-2xl border border-red-100 dark:border-red-900/50 backdrop-blur-sm shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400">Notre stratégie d'extermination</h2>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <li>🧪 <strong>Gels insecticides professionnels :</strong> Application aux points stratégiques avec effet cascade pour contaminer le nid.</li>
              <li>💨 <strong>Pulvérisation & Nébulisation :</strong> Traitement des volumes pour débusquer les colonies fortement implantées.</li>
              <li>🛑 <strong>Action préventive :</strong> Obturation des zones de passage et conseils d'hygiène ciblés.</li>
            </ul>
          </div>
        </div>

        {/* Pourquoi faire appel à nous ? */}
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-50">Pourquoi choisir Nuisible Marseille ?</h2>
          <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
            <li>✅ <strong>Produits certifiés Certibiocide :</strong> Formulations professionnelles inodores et longue durée.</li>
            <li>✅ <strong>Intervention discrète :</strong> Déplacements en véhicules neutres pour préserver votre tranquillité.</li>
            <li>✅ <strong>Particuliers & Pros :</strong> Traitements adaptés aux logements, restaurants, boulangeries et copropriétés.</li>
            <li>✅ <strong>Prise en charge express :</strong> Déplacement en urgence dans tout Marseille et les environs.</li>
          </ul>
        </div>

        {/* Appel à l'action d'urgence */}
        <div className="text-center bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 backdrop-blur-sm p-10 rounded-2xl shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">Présence de cafards chez vous ou dans votre commerce ?</h3>
          <p className="text-zinc-400 mb-6">N'attendez pas que l'infestation s'aggrave, nos techniciens interviennent immédiatement.</p>
          <a 
            href="tel:+33762240168" 
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-red-600/20"
          >
            <span>Appeler le 07 62 24 01 68</span>
          </a>
        </div>
        
        {/* Formulaire de contact */}
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-2 text-zinc-950 dark:text-zinc-50">
            Demande de devis gratuit
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            Laissez-nous un message avec les détails de votre problème. Nous vous apportons une solution adaptée sous 24h.
          </p>
          <ContactForm />
        </div>

      </main>
    </div>
  );
}