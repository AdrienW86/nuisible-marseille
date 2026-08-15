import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function PigeonsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Image de fond fixe et responsive */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/pigeons-banner.jpeg"
          alt="Dépigeonnage et protection anti-pigeons Marseille"
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
            Protection et <span className="text-red-600">dépigeonnage à Marseille</span>
          </h1>
        </div>

        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10 leading-relaxed">
          La présence massive de pigeons cause des dégradations importantes sur les façades, balcons et toitures. 
          Nous installons des systèmes d'éloignement durables, discrets et respectueux des animaux pour protéger vos bâtiments et vos espaces extérieurs.
        </p>

        {/* Section Risques & Méthodes */}
        <div className="mb-12 space-y-8">
          <div className="bg-white/80 dark:bg-zinc-900/80 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Pourquoi éloigner les pigeons ?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
              <li><strong>Acidité du fiente :</strong> Corrosion rapide des peintures, pierres, façades et véhicules.</li>
              <li><strong>Risques sanitaires :</strong> Propagation d'acariens (poux de pigeon), bactéries et champignons.</li>
              <li><strong>Nuisances sonores et visuelles :</strong> Salissures constantes des balcons, fenêtres et gouttières bouchées.</li>
            </ul>
          </div>

          <div className="bg-red-50/80 dark:bg-red-900/20 p-8 rounded-2xl border border-red-100 dark:border-red-900/50 backdrop-blur-sm shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400">Nos dispositifs anti-pigeons</h2>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <li>📍 <strong>Pics anti-sepose en inox :</strong> Protection efficace des rebords de fenêtres, corniches et balcons.</li>
              <li>🕸️ <strong>Filets de protection :</strong> Obturation complète des cours intérieures, conduits et grands balcons.</li>
              <li>⚡ <strong>Câbles tendus & Gels répulsifs :</strong> Solutions invisibles et esthétiques adaptées aux bâtiments classés.</li>
            </ul>
          </div>
        </div>

        {/* Pourquoi faire appel à nous ? */}
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-50">Pourquoi choisir Nuisible Marseille ?</h2>
          <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
            <li>✅ <strong>Matériel haute résistance :</strong> Équipements durables résistant aux UV et aux intempéries marines.</li>
            <li>✅ <strong>Travaux en hauteur :</strong> Interventions sécurisées sur balcons, toitures et accès difficiles.</li>
            <li>✅ <strong>Nettoyage préalable :</strong> Dépoussiérage et désinfection des zones souillées avant pose.</li>
            <li>✅ <strong>Intervention sur mesure :</strong> Solutions adaptées aux copropriétés, commerces et particuliers.</li>
          </ul>
        </div>

        {/* Appel à l'action d'urgence */}
        <div className="text-center bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 backdrop-blur-sm p-10 rounded-2xl shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">Des pigeons envahissent votre balcon ou toiture ?</h3>
          <p className="text-zinc-400 mb-6">Demandez un diagnostic gratuit et une installation rapide à Marseille et ses alentours.</p>
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
            Décrivez votre besoin d'aménagement ou de protection. Nous étudions votre projet sous 24h.
          </p>
          <ContactForm />
        </div>

      </main>
    </div>
  );
}