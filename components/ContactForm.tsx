"use client";

import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  // Remplace "ton-id-formspree" par l'ID que Formspree te donnera
  const onSubmit = async (data: any) => {
    const response = await fetch("https://formspree.io/f/ton-id-formspree", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
    
    if (response.ok) {
      alert("Message envoyé ! Nous vous recontactons vite.");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("name")} placeholder="Nom" className="w-full p-3 rounded-lg border dark:bg-zinc-800" required />
      <input {...register("email")} type="email" placeholder="Email" className="w-full p-3 rounded-lg border dark:bg-zinc-800" required />
      <textarea {...register("message")} placeholder="Votre message" rows={4} className="w-full p-3 rounded-lg border dark:bg-zinc-800" required />
      <button type="submit" className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition">
        Envoyer
      </button>
    </form>
  );
}