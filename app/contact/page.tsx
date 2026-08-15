export default function ContactPage() {
  return (
    <section className="bg-zinc-50 dark:bg-black py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 mb-12">Contactez-nous</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Bloc Formulaire */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">Demande d'intervention</h2>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Votre nom" className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900" />
              <input type="email" placeholder="Votre email" className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900" />
              <textarea placeholder="Votre message" rows={4} className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 dark:bg-zinc-900"></textarea>
              <button className="bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition">
                Envoyer ma demande
              </button>
            </form>
          </div>

          {/* Bloc Carte Google Maps Intégré */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50">Zone d'intervention</h2>
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185895.25572487008!2d5.215497957511572!3d43.28047506568762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2sMarseille!5e0!3m2!1sfr!2sfr!4v1782480308748!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Nous intervenons dans tout Marseille et ses alentours.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}