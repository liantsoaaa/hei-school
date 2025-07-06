import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Admission = () => {
    return (
        <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                {/* Titre principal */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#001F5B] mb-8 text-center">
                    Admission
                </h1>
                
                {/* Description */}
                <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
                    Ouverte aux bacheliers de toutes les séries, l'admission chez HEI se fait par test de niveau :<br />
                    une épreuve de français niveau B2 et d'une épreuve de mathématiques niveau Terminale D.
                </p>

                {/* Étapes d'admission avec fond jaune */}
                <div className="space-y-6 mb-12">
                    {/* Étape 1 */}
                    <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
                        <div className="flex items-start gap-6">
                            <div className="bg-[#001F5B] text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                                01
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-[#001F5B] mb-2">
                                            Dépôt de dossiers
                                        </h2>
                                        <p className="text-gray-700">
                                            Pour les bacheliers de toutes séries sans limite d'âge
                                        </p>
                                    </div>
                                    <FaArrowRight className="text-[#001F5B] text-xl mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Étape 2 */}
                    <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
                        <div className="flex items-start gap-6">
                            <div className="bg-[#001F5B] text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                                02
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-[#001F5B] mb-2">
                                            Test de niveau
                                        </h2>
                                        <p className="text-gray-700">
                                            Composé d'une épreuve de français niveau B2 et d'une épreuve de mathématiques niveau Terminale D
                                        </p>
                                    </div>
                                    <FaArrowRight className="text-[#001F5B] text-xl mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Étape 3 */}
                    <div className="bg-yellow-50 p-6 rounded-lg shadow-sm">
                        <div className="flex items-start gap-6">
                            <div className="bg-[#001F5B] text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                                03
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-[#001F5B] mb-2">
                                            Inscription définitive
                                        </h2>
                                        <p className="text-gray-700">
                                            (si test réussi)
                                        </p>
                                    </div>
                                    <FaArrowRight className="text-[#001F5B] text-xl mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Boutons avec nouvelles couleurs */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                        Inscrivez-vous ici
                        <FaArrowRight />
                    </button>
                    <button className="bg-[#001F5B] hover:bg-[#00308F] text-white px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                        Résultat concours
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admission;