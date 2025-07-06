import React from "react";
import cloud from "../assets/Cloud-et-cybersecurite_Plan-de-travail-1-300x300.png";
import ai from "../assets/Intelligence-artificielle_Plan-de-travail-1-300x300.png";
import logiciel from "../assets/Ingenierie-logicielle_Plan-de-travail-1-1-300x300.png";

const Domain = () => {
    const domains = [
        {
            title: "Cloud et cybersécurité",
            description:
                "Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.",
            image: cloud,
        },
        {
            title: "Intelligence artificielle",
            description:
                "Le monde de la reconnaissance faciale ou la détection d'obstacles par les voitures semi-autonomes vous fascinent ? Ce n'est pas sorcier, cela s'apprend. Apprenez les bases de l'intelligence artificielle lors de vos cours chez HEI.",
            image: ai,
        },
        {
            title: "Ingénierie logicielle",
            description:
                "Apprenez les principes de la conception ou le développement de programmes et d'applications web et mobile et explorez le monde fascinant des 'codes'. À la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.",
            image: logiciel,
        },
    ];

    return (
        <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-[#001F5B] mb-6 text-center">
                    Domaines
                </h1>
                <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                    Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l'avenir :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {domains.map((domain, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src={domain.image}
                                    alt={domain.title}
                                    className="w-40 h-40 mb-6 object-cover"
                                />
                                <h2 className="text-2xl font-bold text-[#001F5B] mb-4">
                                    {domain.title}
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    {domain.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Domain;