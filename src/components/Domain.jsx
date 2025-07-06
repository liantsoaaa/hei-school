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
                "Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.",
            image: ai,
        },
        {
            title: "Ingénierie logicielle",
            description:
                "Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. À la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.",
            image: logiciel,
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Domaines</h2>
            <p className="text-center mb-10 text-gray-700 max-w-2xl mx-auto">
                Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
                {domains.map((domain, index) => (
                    <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                        <img
                            src={domain.image}
                            alt={domain.title}
                            className="w-32 h-32 mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">{domain.title}</h3>
                        <p className="text-gray-600">{domain.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Domain;