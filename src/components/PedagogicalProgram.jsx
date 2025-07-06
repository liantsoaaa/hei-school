import React from 'react';
import programesImg from '../assets/programmes.png';
import maskGroup1 from '../assets/Mask-group-1.png';
import maskGroup2 from '../assets/Mask-group-2.png';
import maskGroup3 from '../assets/Mask-group-3.png';

const ProgramPage = () => {
    return (
        <div className="min-h-screen bg-white p-8">
            {/* Main Content */}
            <div className="max-w-6xl mx-auto">
                {/* Section 1: Image + Texte */}
                <div className="flex flex-col lg:flex-row gap-8 mb-16"> {/* Ajout de mb-16 */}
                    {/* Left Column - Image (taille réduite) */}
                    <div className="lg:w-1/2">
                        <img
                            src={programesImg}
                            alt="Programme pédagogique"
                            className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md"
                        />
                    </div>

                    {/* Right Column - Text */}
                    <div className="lg:w-1/2 text-navy-blue">
                        {/* Title Section */}
                        <h1 className="text-3xl font-bold text-navy-blue mb-8">Le programme pédagogique</h1>

                        <p className="mb-6">
                            Suivant le système LMD, jusqu'au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
                        </p>

                        {/* Bouton "Notre Programme" */}
                        <button className="border-2 border-navy-blue text-navy-blue bg-transparent px-6 py-2 rounded-lg mb-6 transition-all duration-300 hover:bg-blue-900 hover:text-white">
                            Notre Programme
                        </button>
                    </div>
                </div>

                {/* Section 2: Cards - Augmentation de la taille */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"> {/* Changement de gap et mb-16 */}
                    {/* Card 1 */}
                    <div className="bg-yellow-50 p-4 rounded-lg shadow-md border-l-4 border-yellow-400"> {/* p-4 au lieu de p-3 */}
                        <h3 className="text-yellow-500 text-3xl font-bold mb-2 text-center">25%</h3> {/* text-3xl au lieu de text-2xl */}
                        <p className="text-navy-blue text-base text-center">Apprentissage théoriques en présentiel</p> {/* text-base au lieu de text-sm */}
                    </div>

                    {/* Card 2 */}
                    <div className="bg-yellow-50 p-4 rounded-lg shadow-md border-l-4 border-yellow-400">
                        <h3 className="text-yellow-500 text-3xl font-bold mb-2 text-center">25%</h3>
                        <p className="text-navy-blue text-base text-center">Apprentissage sur supports numériques</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-yellow-50 p-4 rounded-lg shadow-md border-l-4 border-yellow-400">
                        <h3 className="text-yellow-500 text-3xl font-bold mb-2 text-center">25%</h3>
                        <p className="text-navy-blue text-base text-center">Travaux individuels de l'étudiant</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-yellow-50 p-4 rounded-lg shadow-md border-l-4 border-yellow-400">
                        <h3 className="text-yellow-500 text-3xl font-bold mb-2 text-center">25%</h3>
                        <p className="text-navy-blue text-base text-center">Apprentissage en entreprise</p>
                    </div>
                </div>

                {/* Section 3: Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="flex justify-center items-center">
                        <img 
                            src={maskGroup1} 
                            alt="Image 1" 
                            className="h-64 w-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <img 
                            src={maskGroup2} 
                            alt="Image 2" 
                            className="h-64 w-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <img 
                            src={maskGroup3} 
                            alt="Image 3" 
                            className="h-64 w-auto object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramPage;