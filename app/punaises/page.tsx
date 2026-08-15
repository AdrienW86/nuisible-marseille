import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function PunaisesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Image de fond fixe et responsive */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/punaises-banner.jpeg"
          alt="Traitement punaises de lit Marseille"
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
            Traitement et éradication des <span className="text-red-600">punaises de lit à Marseille</span>
          </h1>
        </div>

        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10 leading-relaxed">
          Les punaises de lit se reproduisent extrêmement vite et sont particulièrement difficiles à éliminer. 
          Nous utilisons des protocoles professionnels certifiés combinant traitements thermiques et chimiques pour garantir l'éradication totale des œufs, larves et adultes.
        </p>

        {/* Section Signes & Risques */}
        <div className="mb-12 space-y-8">
          <div className="bg-white/80 dark:bg-zinc-900/80 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Comment détecter leur présence ?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-300">
              <li><strong>Pqûres alignées :</strong> Démangeaisons et boutons rouges souvent en ligne sur les bras ou jambes.</li>
              <li><strong>Traces de sang :</strong> Petites taches brunes/noires sur le matelas, les draps ou la structure du lit.</li>
              <li><strong>Invisibilité le jour :</strong> Elles se cachent dans la couture des matelas, les plinthes et les prises électriques.</li>
            </ul>
          </div>

          <div className="bg-red-50/80 dark:bg-red-900/20 p-8 rounded-2xl border border-red-100 dark:border-red-900/50 backdrop-blur-sm shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400">Notre protocole d'extermination</h2>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <li>🔍 <strong>Inspection minutieuse :</strong> Localisation précise des foyers d'infestation dans votre logement.</li>
              <li>🔥 <strong>Traitement thermique & chimique :</strong> Pulvérisation d'insecticides ciblés et nébulisation pour neutraliser tous les stades du cycle.</li>
              <li>🛡️ <strong>Protocole de préparation :</strong> Conseils clairs pour préparer votre logement avant et après le passage.</li>
            </ul>
          </div>
        </div>

        {/* Pourquoi faire appel à nous ? */}
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4 text-zinc-950 dark:text-zinc-50">Pourquoi choisir Nuisible Marseille ?</h2>
          <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
            <li>✅ <strong>Produits certifiés Certibiocide :</strong> Solutions hautement efficaces non accessibles au grand public.</li>
            <li>✅ <strong>Intervention 100% discrète :</strong> Véhicules neutres sans marquage pour protéger votre vie privée.</li>
            <li>✅ <strong>Suivi de contrôle :</strong> Passages de sécurité inclus pour valider l'extinction complète de la colonie.</li>
            <li>✅ <strong>Disponibilité immédiate :</strong> Prise en charge urgente dans tous les arrondissements de Marseille.</li>
          </ul>
        </div>

        {/* Appel à l'action d'urgence */}
        <div className="text-center bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 backdrop-blur-sm p-10 rounded-2xl shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-white mb-2">Des démangeaisons ? N'attendez pas l'invasion</h3>
          <p className="text-zinc-400 mb-6">Nos experts interviennent en urgence à Marseille et dans toute la métropole.</p>
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
            Décrivez votre situation ci-dessous. Nous vous rappelons rapidement pour établir un diagnostic et fixer un rendez-vous.
          </p>
          <ContactForm />
        </div>

      </main>
    </div>
  );
}