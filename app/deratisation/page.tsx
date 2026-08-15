import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function DeratisationPage() {
  return (
    <div className="relative min-h-screen">
      {/* Image de fond fixe et responsive */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Dératisation fond"
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
            Service professionnel de <span className="text-red-600">dératisation à Marseille</span>
          </h1>
        </div>

        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10 leading-relaxed">
          Une présence de rats ou de souris dans votre domicile ou votre entreprise nécessite une intervention immédiate. 
          Nous appliquons des protocoles ciblés, sécurisés et durables pour éradiquer les rongeurs et protéger vos locaux.
        </p>

        {/* Section Risques & Méthodes */}
        <div className="mb-12 space-y-8">
          <div className="bg-white/80 dark:bg-zinc-900/80 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Pourquoi agir vite ?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
              <li><strong>Risques sanitaires :</strong> Transmission de maladies graves (leptospirose, salmonellose).</li>
              <li><strong>Dégâts matériels :</strong> Câbles rongés (risques d'incendie), détérioration de l'isolation et des cloisons.</li>
              <li><strong>Contamination :</strong> Souillure des denrées alimentaires et dépréciation des stocks.</li>
            </ul>
          </div>

          <div className="bg-red-50/80 dark:bg-red-900/20 p-8 rounded-2xl border border-red-100 dark:border-red-900/50 backdrop-blur-sm shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400">Notre approche sécurisée</h2>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <li>🌿 <strong>Produits homologués :</strong> Solutions ciblées conformes aux normes Certibiocide.</li>
              <li>🐾 <strong>Sécurité renforcée :</strong> Boîtiers sécurisés inoffensifs pour vos enfants et animaux.</li>
              <li>🎯 <strong>Actions à la source :</strong> Rebouchage des points d'accès pour éviter toute réinfestation.</li>
            </ul>
          </div>
        </div>

        {/* Pourquoi faire appel à nous ? */}
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-50">Pourquoi choisir Nuisible Marseille ?</h2>
          <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
            <li>✅ <strong>Diagnostic minutieux :</strong> Identification précise des espèces et lieux de passage.</li>
            <li>✅ <strong>Intervention discrète :</strong> Véhicules neutres pour préserver votre tranquillité.</li>
            <li>✅ <strong>Garantie de résultat :</strong> Suivi et contrôle post-intervention.</li>
            <li>✅ <strong>Ancrage local :</strong> Connaissance approfondie des spécificités du bâti marseillais.</li>
          </ul>
        </div>

        {/* Appel à l'action d'urgence */}
        <div className="text-center bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 backdrop-blur-sm p-10 rounded-2xl shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">Une urgence ou une question ?</h3>
          <p className="text-zinc-400 mb-6">Nos techniciens interviennent chez vous à Marseille et dans toute la métropole.</p>
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
            Besoin d'une estimation ? Remplissez ce formulaire, nous vous recontactons dans les plus brefs délais.
          </p>
          <ContactForm />
        </div>

      </main>
    </div>
  );
}