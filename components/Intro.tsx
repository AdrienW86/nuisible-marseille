import Link from "next/link";

export default function IntroSection() {
  const guarantees = [
    {
      icon: "⚡",
      title: "Intervention Express",
      description: "Sur place en moins de 2 heures à Marseille et ses environs 7j/7.",
    },
    {
      icon: "🛡️",
      title: "Garantie de Résultat",
      description: "Traitements certifiés Certibiocide avec suivi d'efficacité inclus.",
    },
    {
      icon: "🤫",
      title: "Discrétion Totale",
      description: "Véhicules neutres sans marquage pour préserver votre tranquillité.",
    },
  ];

  return (
    <section className="relative py-16 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* En-tête de présentation */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-500">
            Entreprise Agréée à Marseille
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-2 mb-6 tracking-tight">
            Votre spécialiste local en éradication de nuisibles
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Face à une infestation de rats, souris, punaises de lit ou cafards, chaque minute compte. 
            Nous intervenons auprès des particuliers et des professionnels dans tous les arrondissements 
            de Marseille avec des solutions radicales, durables et respectueuses de vos locaux.
          </p>
        </div>

        {/* Cartes d'arguments clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {guarantees.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-zinc-200/80 dark:border-zinc-700/50 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Appel à l'action secondaire */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-bold py-3.5 px-8 rounded-xl transition-all shadow-md"
          >
            Obtenir un devis gratuit
          </Link>
          <a
            href="tel:+33762240168"
            className="w-full sm:w-auto border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold py-3.5 px-8 rounded-xl transition-all"
          >
            Diagnostic téléphonique immédiat
          </a>
        </div>

      </div>
    </section>
  );
}