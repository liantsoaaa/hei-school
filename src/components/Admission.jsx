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

                {/* Étapes d'admission en disposition horizontale */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Étape 1 */}
                    <div className="bg-yellow-500 p-6 rounded-lg shadow-sm">
                        <div className="flex flex-col h-full">
                            <div className="bg-[#001F5B] text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                01
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xl font-bold text-[#001F5B] mb-2">
                                    Dépôt de dossiers
                                </h2>
                                <p className="text-gray-800">
                                    Pour les bacheliers de toutes séries sans limite d'âge
                                </p>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <FaArrowRight className="text-[#001F5B] text-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Étape 2 */}
                    <div className="bg-yellow-500 p-6 rounded-lg shadow-sm">
                        <div className="flex flex-col h-full">
                            <div className="bg-[#001F5B] text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                02
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xl font-bold text-[#001F5B] mb-2">
                                    Test de niveau
                                </h2>
                                <p className="text-gray-800">
                                    Composé d'une épreuve de français niveau B2 et d'une épreuve de mathématiques niveau Terminale D
                                </p>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <FaArrowRight className="text-[#001F5B] text-xl" />
                            </div>
                        </div>
                    </div>

                    {/* Étape 3 */}
                    <div className="bg-yellow-500 p-6 rounded-lg shadow-sm">
                        <div className="flex flex-col h-full">
                            <div className="bg-[#001F5B] text-white text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                03
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-xl font-bold text-[#001F5B] mb-2">
                                    Inscription définitive
                                </h2>
                                <p className="text-gray-800">
                                    (si test réussi)
                                </p>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <FaArrowRight className="text-[#001F5B] text-xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button className="bg-[#001F5B] hover:bg-[#00308F] text-white px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                        Inscrivez-vous ici
                        <FaArrowRight />
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-[#001F5B] border-2 border-[#001F5B] px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2">
                        Résultat concours
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admission;