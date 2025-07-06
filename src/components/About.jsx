import React from "react";
import { FaGraduationCap, FaUsers, FaMedal } from 'react-icons/fa';
import aboutImage from "../assets/A-propos-left-1.png";

const About = () => {
    return (
        <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image à gauche */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={aboutImage}
                            alt="À propos de HEI"
                            className="rounded-xl shadow-lg w-full"
                        />
                    </div>

                    {/* Contenu à droite */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="text-center mb-7">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#001F5B] mb-3 text-left">
                                À propos de nous
                            </h1>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-6">
                                <FaGraduationCap className="text-yellow-500 text-5xl" />
                                <h3 className="text-2xl md:text-3xl font-bold text-[#001F5B]">
                                    +3 ans
                                </h3>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed pl-16">
                                Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l'informatique.
                                Nous sommes un groupe d'experts, de professionnels et de passionnés de l'informatique de Madagascar et du monde entier.
                            </p>
                        </div>

                        {/* Bloc 2 */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-6">
                                <FaUsers className="text-yellow-500 text-5xl" />
                                <h3 className="text-2xl md:text-3xl font-bold text-[#001F5B]">
                                    +250 étudiants
                                </h3>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed pl-16">
                                Plus de 250 étudiants et plus d'une dizaine d'entreprises ont déjà fait confiance à notre formation habilitée par l'État malgache.
                                Avec eux tous, nous sommes fiers de pouvoir parler de la "grande famille HEI".
                            </p>
                        </div>

                        {/* Bloc 3 */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-6">
                                <FaMedal className="text-yellow-500 text-5xl" />
                                <h3 className="text-2xl md:text-3xl font-bold text-[#001F5B]">
                                    Notre mission
                                </h3>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed pl-16">
                                Notre mission est d'amener des jeunes malgaches sur des domaines porteurs
                                comme l'intelligence artificielle, la cybersécurité, le développement logiciel et bien plus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;