import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#001F5B] text-white py-8 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">HEI</h3>
                    <p>Formation habilitée par l'État suivant le système LMD</p>
                    <p>Habilitation MESupRes n°31309/2023</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Adresse</h3>
                    <p>Il. J 161 R Ambodivoanjo</p>
                    <p>IVandry Antananarivo</p>
                    <p>101, Madagascar</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Navigation</h3>
                    <div className="flex flex-col space-y-2">
                        <a href="/" className="hover:text-yellow-400">Accueil</a>
                        <a href="/about" className="hover:text-yellow-400">À propos</a>
                        <a href="/programs" className="hover:text-yellow-400">Programmes</a>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
                <p>© HEI Madagascar - Tous droits réservés</p>
            </div>
        </footer>
    );
};

export default Footer;