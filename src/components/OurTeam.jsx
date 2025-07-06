import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import drLou from "../assets/DrLou.jpg";
import mrRyan from "../assets/ryan-min-300x300.png";
import mrMirado from "../assets/Mirado-300x300.png";
import parison from "../assets/Parison-150x150.png";
import yannick from "../assets/Yannick-150x150.png";
import tahina from "../assets/Tahina-150x150.png";
import julien from "../assets/Julien-150x150.png";
import jeanAimeMaxa from "../assets/Jean-Aime-Maxa-150x150.png";

const OurTeam = () => {
    const teamMembers = [
        {
            name: "Mirado Rafenomahenintsoa",
            role: "Data and Business Intelligence Specialist 5+",
            image: mrMirado
        },
        {
            name: "Julien Rajerison",
            role: "Lead Développeur | Fondateur de l'association Techzaa Madagascar",
            image: julien
        },
        {
            name: "Ryan ANDRIAMAHERY",
            role: "Développeur back end | Cofondateur et Directeur des opérations de HEI",
            image: mrRyan
        },
        {
            name: "Jean Aimé Maxa",
            role: "Responsable technique cybersécurité chez CES France Continental (Toulouse – France)",
            image: jeanAimeMaxa
        },
        {
            name: "Parison Ravalomanda",
            role: "Ingénieur en Informatique | Ingénieur logiciel chez Google (Londres – UK)",
            image: parison
        },
        {
            name: "Yannick Raharijaona",
            role: "Responsable technique ML chez Rocket Science (Ottawa – Canada)",
            image: yannick
        },
        {
            name: "Dre Tahina Ralitera",
            role: "Docteurs-Ingénieure, CNRS France | Prix L'Oréal-UNESCO pour les Femmes en Science (2017)",
            image: tahina
        },
        {
            name: "Dr Lou Dr Lou Maurica",
            role: "Docteur-ingénieur en informatique | Fondateur et Directeur pédagogique de HEI",
            image: drLou
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev >= teamMembers.length - slidesToShow ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev <= 0 ? teamMembers.length - slidesToShow : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide, slidesToShow]);

    return (
        <div className="bg-blue-200 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-[#001F5B] mb-6">
                    L'équipe pédagogique
                </h1>
                <p className="text-center mb-12 text-gray-700 max-w-3xl mx-auto text-lg">
                    Notre équipe pédagogique se compose d'experts nationaux et internationaux de l'informatique,
                    de la cybersécurité, de l'intelligence artificielle, dont un ingénieur chez Google.
                    Ils sont passionnés par l'informatique et sont engagés vers l'excellence.
                    Nous sommes conscients que cette équipe est la pierre angulaire de l'employabilité
                    de nos étudiants, elle a été soigneusement sélectionnée.
                </p>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
                    >
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 px-4"
                                style={{ width: `${100 / slidesToShow}%` }}
                            >
                                <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-yellow-400"
                                    />
                                    <h3 className="text-xl font-bold text-[#001F5B] text-center mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-gray-600 text-center">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 ml-2 hover:bg-gray-100"
                    >
                        <FaChevronLeft className="text-[#001F5B]" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10 mr-2 hover:bg-gray-100"
                    >
                        <FaChevronRight className="text-[#001F5B]" />
                    </button>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: Math.ceil(teamMembers.length / slidesToShow) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index * slidesToShow)}
                            className={`w-3 h-3 rounded-full ${currentSlide >= index * slidesToShow && currentSlide < (index + 1) * slidesToShow ? 'bg-[#001F5B]' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;