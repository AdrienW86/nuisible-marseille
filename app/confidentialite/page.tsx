import Link from "next/link";

export const metadata = {
  title: "Politique de Confidentialité | Nuisible Marseille",
  description: "Politique de confidentialité et traitement des données personnelles de Nuisible Marseille.",
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="py-16 bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* En-tête */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8 mb-10">
          <span className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-500">
            Protection des données
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white mt-2 tracking-tight">
            Politique de Confidentialité
          </h1>
        </div>

        <div className="space-y-10 leading-relaxed text-sm sm:text-base">
          
          {/* Introduction */}
          <section className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Responsable du traitement
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              L’entreprise <strong>Nuisible Marseille</strong> (HOSPICE MICHEL - Auto-entrepreneur, SIREN 483 160 420), située au 88 chemin des charrettes, 66000 Perpignan, s’engage à protéger la vie privée des utilisateurs de son site web.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Pour toute question concernant vos données personnelles, vous pouvez nous contacter à :{" "}
              <a href="mailto:contact@nuisible-marseille.fr" className="text-red-600 hover:underline font-semibold">
                contact@nuisible-marseille.fr
              </a> ou par téléphone au <a href="tel:+33762240168" className="text-red-600 hover:underline font-semibold">+33 7 62 24 01 68</a>.
            </p>
          </section>

          {/* Collecte des données */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              1. Données collectées
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Nous collectons uniquement les données strictement nécessaires au traitement de vos demandes d’intervention ou de devis :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><strong>Données d'identification :</strong> Nom, prénom.</li>
              <li><strong>Données de contact :</strong> Numéro de téléphone, adresse e-mail.</li>
              <li><strong>Données de localisation :</strong> Adresse postale de l'intervention.</li>
            </ul>
          </section>

          {/* Finalité */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              2. Utilisation de vos données
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Vos informations personnelles sont traitées pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Prise de contact rapide suite à une demande de devis ou de rappel d'urgence.</li>
              <li>Planification et réalisation des prestations de dératisation et désinsectisation.</li>
              <li>Établissement des factures et suivi administratif.</li>
            </ul>
          </section>

          {/* Durée de conservation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              3. Conservation des données
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Vos données sont conservées pendant la durée nécessaire à la réalisation des prestations, puis archivées selon les obligations légales applicables (jusqu'à 10 ans pour les pièces comptables). Elles ne sont en aucun cas revendues à des tiers.
            </p>
          </section>

          {/* Hébergement et sécurité */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              4. Sécurité et hébergement
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Le site est hébergé par la société <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, États-Unis). Nous mettons en œuvre toutes les mesures techniques pour assurer la sécurité de vos données.
            </p>
          </section>

          {/* Vos droits (RGPD) */}
          <section className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              5. Vos droits (RGPD)
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Conformément à la réglementation européenne (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Droit d'accès, de rectification ou d'effacement de vos données.</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit d'opposition au traitement.</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 pt-2">
              Pour exercer ces droits, adressez un e-mail à :{" "}
              <a href="mailto:contact@nuisible-marseille.fr" className="text-red-600 hover:underline font-semibold">
                contact@nuisible-marseille.fr
              </a>
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              6. Cookies
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Ce site n'utilise que des cookies strictement nécessaires à son bon fonctionnement et à la mesure d'audience anonyme. Vous pouvez configurer votre navigateur pour bloquer les cookies, mais certaines fonctionnalités peuvent en être affectées.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}