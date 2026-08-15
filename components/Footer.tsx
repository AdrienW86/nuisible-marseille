import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black z-20">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        
        {/* Grille du footer */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Bloc 1: Identité */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">
              NUISIBLE<span className="text-red-600"> MARSEILLE</span>
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Intervention rapide et garantie pour les particuliers et professionnels.
            </p>
          </div>

          {/* Bloc 2: Zones d'intervention */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-zinc-950 dark:text-zinc-50">Zone d'intervention</h4>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400">
              <li>Marseille et environs</li>
              <li>Bouches-du-Rhône (13)</li>
            </ul>
          </div>

          {/* Bloc 3: Contact légal */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-zinc-950 dark:text-zinc-50">Infos légales</h4>
            <Link href="/mentions-legales" className="text-sm text-zinc-600 hover:text-red-600 dark:text-zinc-400 transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="text-sm text-zinc-600 hover:text-red-600 dark:text-zinc-400 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-100 pt-8 dark:border-zinc-900 sm:flex-row text-xs text-zinc-500 dark:text-zinc-500">
          <p>
            © {currentYear} Nuisible Marseille. Tous droits réservés.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>SIRET : 483 160 420 00012</span>
            <span className="hidden sm:inline">•</span>
            <p>
              Propulsé par{" "}
              <a 
                href="https://code-v.fr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold hover:text-red-600 transition-colors underline underline-offset-2"
              >
                code-v.fr
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}