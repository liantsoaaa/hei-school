import React from "react";
import prettyGirl from "../assets/outlet.png";

const Outlet = () => {
    return (
        <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Contenu texte à gauche */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#001F5B] mb-6">
                            Quelques débouchés
                        </h1>
                        
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir 
                            les fondements de la programmation (qui vous servira pour les différents métiers) ! 
                            Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…
                        </p>
                        
                        <p className="text-lg text-[#001F5B] leading-relaxed">
                            Développeur back end, développeur front end, développeurs mobile, chefs de projet, 
                            exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, 
                            auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…
                        </p>
                    </div>
                    
                    {/* Image à droite */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={prettyGirl}
                            alt="Career illustration"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Outlet;