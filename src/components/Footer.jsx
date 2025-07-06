import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import heiLogo from '../assets/cropped-Logo-e1662790239183.png';

const Footer = () => {
    return (
        <footer className="bg-[#001F5B] text-white py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img src={heiLogo} alt="HEI Logo" className="h-20 w-auto mb-4" />
                    <p className="mb-4">Formation habilitée par l’Etat suivant le système LMD</p>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                            <FaFacebook size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>

                {/* Colonne 2 - Navigation */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Navigation</h3>
                    <div className="flex flex-col space-y-2">
                        <a href="/" className="hover:text-yellow-400">Accueil</a>
                        <a href="/formation" className="hover:text-yellow-400">Formation</a>
                        <a href="/admission" className="hover:text-yellow-400">Admission</a>
                        <a href="/actualites" className="hover:text-yellow-400">Actualités</a>
                        <a href="/contact" className="hover:text-yellow-400">Contact</a>
                    </div>
                </div>

                {/* Colonne 3 - Contact */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact</h3>
                    <div className="space-y-2">
                        <p>Ilot J 161 R Ambodivoanjo</p>
                        <p>Ivandry, Antananarivo 101</p>
                        <p>Madagascar</p>
                        <p>Email: contact@hei.school</p>
                        <p>Tél: +261 34 00 000 00</p>
                    </div>
                </div>

                {/* Colonne 4 - Newsletter */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                    <p className="mb-4">Abonnez-vous à notre newsletter pour recevoir nos actualités</p>
                    <div className="flex">
                        <input 
                            type="email" 
                            placeholder="Votre email" 
                            className="px-4 py-2 rounded-l text-gray-800 w-full" 
                        />
                        <button className="bg-yellow-500 text-[#001F5B] px-4 py-2 rounded-r font-medium hover:bg-yellow-400 transition">
                            OK
                        </button>
                    </div>
                </div>
            </div>

            {/* Bas de footer */}
            <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-700">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p>© {new Date().getFullYear()} HEI Madagascar - Tous droits réservés</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="/mentions-legales" className="hover:text-yellow-400">Mentions légales</a>
                        <a href="/politique-de-confidentialite" className="hover:text-yellow-400">Politique de confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;