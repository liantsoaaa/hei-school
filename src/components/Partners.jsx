import React from 'react';
import nexta from '../assets/NEXTA.png';
import pn from '../assets/PN.png';
import yooz from '../assets/Yooz.png';
import etech from '../assets/etech.png';
import emit from '../assets/emit.png';
import numer from '../assets/Numer.png';
import bp from '../assets/bp.png';
import yif from '../assets/YIF.png';
import kanteCo from '../assets/KanteCo.png';

const PartnersSection = () => {
    return (
        <div className="bg-white py-12 px-8 text-blue-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-navy-blue mb-8 text-center">Nos partenaires</h2>

                <p className="text-navy-blue mb-12 text-center max-w-3xl mx-auto">
                    L'employabilité de nos étudiants se base sur la pertinence de notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires.
                </p>

                {/* Première ligne avec 5 logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
                    <div className="flex items-center justify-center">
                        <img src={nexta} alt="nexta" className="h-16 w-auto object-contain" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={pn} alt="pn" className="h-16 w-auto object-contain" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={yooz} alt="yooz" className="h-16 w-auto object-contain" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={etech} alt="etech" className="h-16 w-auto object-contain" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={emit} alt="emit" className="h-16 w-auto object-contain" />
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <div className="flex items-center justify-center">
                        <img src={numer} alt="numer" className="h-16 w-auto object-contain" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={bp} alt="bp" className="h-16 w-auto object-contain" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={yif} alt="yif" className="h-16 w-auto object-contain" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={kanteCo} alt="kanteCo" className="h-16 w-auto object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersSection;