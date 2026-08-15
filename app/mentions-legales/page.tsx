import Link from "next/link";

export const metadata = {
  title: "Mentions Légales | Nuisible Marseille",
  description: "Mentions légales et informations réglementaires de Nuisible Marseille.",
};

export default function MentionsLegales() {
  return (
    <main className="py-16 bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Titre */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8 mb-10">
          <span className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-500">
            Information réglementaire
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white mt-2 tracking-tight">
            Mentions Légales
          </h1>
        </div>

        <div className="space-y-12 leading-relaxed">
          
          {/* Éditeur du site */}
          <section className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Éditeur du site
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <p><strong className="text-zinc-900 dark:text-white">Exploitant :</strong> HOSPICE MICHEL</p>
              <p><strong className="text-zinc-900 dark:text-white">Forme juridique :</strong> Auto-entrepreneur</p>
              <p><strong className="text-zinc-900 dark:text-white">Nom commercial :</strong> Nuisible Marseille</p>
              <p><strong className="text-zinc-900 dark:text-white">Directeur de la publication :</strong> HOSPICE MICHEL</p>
              <p><strong className="text-zinc-900 dark:text-white">SIREN :</strong> 483 160 420</p>
              <p><strong className="text-zinc-900 dark:text-white">SIRET :</strong> 483 160 420 00012</p>
              <p className="md:col-span-2">
                <strong className="text-zinc-900 dark:text-white">Adresse administrative :</strong> 88 chemin des charrettes, 66000 Perpignan, France
              </p>
              <p>
                <strong className="text-zinc-900 dark:text-white">Téléphone :</strong>{" "}
                <a href="tel:+33762240168" className="text-red-600 hover:underline">+33 7 62 24 01 68</a>
              </p>
              <p>
                <strong className="text-zinc-900 dark:text-white">Email :</strong>{" "}
                <a href="mailto:contact@nuisible-marseille.fr" className="text-red-600 hover:underline">contact@nuisible-marseille.fr</a>
              </p>
            </div>
          </section>

          {/* Hébergeur */}
          <section className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              Hébergement
            </h2>
            <div className="text-sm space-y-2">
              <p><strong className="text-zinc-900 dark:text-white">Hébergeur :</strong> Vercel Inc.</p>
              <p><strong className="text-zinc-900 dark:text-white">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
              <p>
                <strong className="text-zinc-900 dark:text-white">Site web :</strong>{" "}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                  https://vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Conditions d'utilisation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Conditions d'utilisation
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Le site <strong>Nuisible Marseille</strong> est accessible à l'adresse URL :{" "}
              <Link href="https://www.nuisible-marseille.fr/" className="text-red-600 hover:underline">
                https://www.nuisible-marseille.fr/
              </Link>.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Son utilisation est régie par les présentes conditions. En consultant ce site, vous acceptez sans réserve ces termes. Les conditions d'utilisation peuvent être modifiées à tout moment et sans préavis par l'éditeur.
            </p>
          </section>

          {/* Limitation de responsabilité */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Limitation de responsabilité
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour. Cependant, elles sont fournies à titre indicatif et de bonne foi, et peuvent contenir des inexactitudes ou des omissions.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              L'entreprise <strong>Nuisible Marseille</strong> ne pourra en aucun cas être tenue responsable des erreurs, de l'absence de disponibilité des fonctionnalités ou des dommages directs ou indirects découlant de l'utilisation ou de l'interprétation des contenus de ce site.
            </p>
          </section>

          {/* Propriété intellectuelle & Droit applicable */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Droit applicable et litiges
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Les présentes conditions sont régies par les lois françaises. En cas de litige ou de contestation, et à défaut d'accord amiable, les tribunaux français seront seuls compétents pour régler le différend. La langue de référence pour tout contentieux est le français.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}