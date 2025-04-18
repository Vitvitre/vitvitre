
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Accueil */}
      <section className="bg-white text-center py-12 px-6">
        <img src="/logo.jpg" alt="Vit'Vitre Logo" className="mx-auto w-24 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Nettoyage de vitres à Mulhouse</h1>
        <p className="mb-6 text-lg">Pour particuliers et professionnels – Disponible 24h/24</p>
        <Button className="text-lg px-6 py-3">Recevoir mon devis gratuit</Button>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">Pour les particuliers</h3>
            <ul className="list-disc pl-4 text-left">
              <li>Fenêtres classiques</li>
              <li>Vérandas</li>
              <li>Accès difficiles</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Pour les professionnels</h3>
            <ul className="list-disc pl-4 text-left">
              <li>Vitrines de magasins</li>
              <li>Surfaces vitrées de bureaux</li>
              <li>Entretien régulier ou ponctuel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Avant/Après */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Avant / Après</h2>
        <p className="text-center">Des photos de nos réalisations seront bientôt ajoutées ici.</p>
      </section>

      {/* À propos */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Qui suis-je ?</h2>
        <p className="max-w-2xl mx-auto text-center">Je m'appelle Hazzab Mouhammed, fondateur de Vit'Vitre. Je suis installé à Mulhouse et j'interviens personnellement pour chaque prestation. Mon objectif : un travail bien fait, une réactivité maximale, et la satisfaction client avant tout.</p>
      </section>

      {/* Zone d'intervention */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Zone d'intervention</h2>
        <p className="text-center max-w-xl mx-auto">Je me déplace à Mulhouse et dans ses environs : Lutterbach, Wittenheim, Illzach, Riedisheim, Kingersheim, Pfastatt, et plus encore.</p>
      </section>

      {/* Devis */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Demande de devis</h2>
        <p className="mb-6">Remplissez notre formulaire en ligne, réponse sous 24h max !</p>
        <Button className="px-6 py-3 text-lg">Remplir le formulaire</Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 text-sm">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-2">Vit'Vitre</h3>
            <p>Hazzab Mouhammed<br />Micro-entrepreneur<br />Mulhouse (68)</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Légal</h3>
            <ul className="space-y-1">
              <li><a href="#" className="underline">Mentions légales</a></li>
              <li><a href="#" className="underline">CGV</a></li>
              <li><a href="#" className="underline">Politique de cookies</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p>Email : contact@vitvitre.fr</p>
          </div>
        </div>
        <p className="text-center mt-6">Site professionnel – Tous droits réservés</p>
      </footer>
    </div>
  );
}
