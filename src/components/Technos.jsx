import React from 'react';
import javaLogo from '../assets/Java-150x150.png';
import jsLogo from '../assets/JS-150x150.png';
import reactLogo from '../assets/react.png';
import python from '../assets/python-150x150.png';
import c from '../assets/C-150x150.png';
import ts from '../assets/TS-150x150.png';
import docker from '../assets/docker-300x77.png';
import nextJS from '../assets/next.png';
import aws from '../assets/aws.png';
import serverless from '../assets/serverless.png';
import openApi from '../assets/openapi.png';

const TechnologiesSection = () => {
    return (
        <div className="bg-gray-200 py-12 px-8">
            <div className="max-w-6xl mx-auto text-blue-950">
                {/* Titre - Centré */}
                <h2 className="text-3xl font-bold mb-8 text-center">Les technos et langages utilisées</h2>

                {/* Description - Centrée */}
                <p className="text-navy-blue mb-12 text-center max-w-3xl mx-auto">
                    Nos étudiants sont formés à l'utilisation et à la maîtrise des langages de programmation Java et JavaScript.
                    Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web,
                    offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
                    {/* Java */}
                    <div className="flex flex-col items-center">
                        <img src={javaLogo} alt="Java" className="h-16 w-auto mb-2" />
                    </div>
                    {/* Python */}
                    <div className="flex flex-col items-center">
                        <img src={python} alt="Python" className="h-16 w-auto mb-2" />
                    </div>
                    {/* JavaScript */}
                    <div className="flex flex-col items-center">
                        <img src={jsLogo} alt="JavaScript" className="h-16 w-auto mb-2" />
                    </div>
                    {/* C */}
                    <div className="flex flex-col items-center">
                        <img src={c} alt="C" className="h-16 w-auto mb-2" />
                    </div>
                    {/* TypeScript */}
                    <div className="flex flex-col items-center">
                        <img src={ts} alt="TypeScript" className="h-16 w-auto mb-2" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    {/* Docker */}
                    <div className="flex flex-col items-center">
                        <img src={docker} alt="Docker" className="h-16 w-auto mb-2" />
                    </div>
                    {/* Next.js */}
                    <div className="flex flex-col items-center">
                        <img src={nextJS} alt="Next.js" className="h-16 w-auto mb-2" />                    </div>
                    {/* AWS */}
                    <div className="flex flex-col items-center">
                        <img src={aws} alt="AWS" className="h-16 w-auto mb-2" />
                    </div>
                    {/* Serverless */}
                    <div className="flex flex-col items-center">
                        <img src={serverless} alt="Serverless" className="h-16 w-auto mb-2" />
                    </div>
                    {/* React */}
                    <div className="flex flex-col items-center">
                        <img src={reactLogo} alt="React" className="h-16 w-auto mb-2" />
                    </div>
                    {/* OpenAPI */}
                    <div className="flex flex-col items-center">
                        <img src={openApi} alt="OpenAPI" className="h-16 w-auto mb-2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologiesSection;