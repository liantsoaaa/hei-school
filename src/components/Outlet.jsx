import React from "react";
import prettyGirl from "../assets/outlet.png";

const Outlet = () => {
    return (
        <div className="bg-white py-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">Quelques débouchés</h2>
            <p className="text-center mb-10 text-gray-700 max-w-2xl mx-auto">
                Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation qui vous servira pour les différents métiers ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur...
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto px-4">
                <div className="text-center md:text-left md:w-1/2">
                    <p className="text-lg text-blue-900">
                        Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesteurs, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité...
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img
                        src={prettyGirl}
                        alt="Career illustration"
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Outlet;