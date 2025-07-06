import React, { useState, useEffect } from "react";
import heiBanner1 from "../assets/hei-banner-1.png";
import heiBanner2 from "../assets/hei-banner-2.png";
import heiBanner3 from "../assets/hei-banner-3.png";

const Home = () => {
    const banners = [
        {
            image: heiBanner1,
            title: "Haute École d'Informatique",
            description: "Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants."
        },
        {
            image: heiBanner2,
            title: "Haute École d'Informatique",
            description: "Des entreprises partenaires et une équipe pédagogique et administrative qui travaille sans relâche pour la montée en compétences de nos étudiants."
        },
        {
            image: heiBanner3,
            title: "Haute École d'Informatique",
            description: `"L'éducation est l'arme la plus puissante pour changer le monde" selon Nelson Mandela.
            "L'éducation dans l'informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar" selon HEI.`
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            <div className="relative h-screen">
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        <div className="relative w-full h-full">
                            <img
                                src={banner.image}
                                alt={`Banner ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
                        </div>
                        
                        <div className="absolute inset-0 flex items-center justify-center text-center px-8">
                            <div className="text-white max-w-4xl">
                                <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">{banner.title}</h1>
                                <p className="text-xl md:text-2xl mb-16 leading-relaxed max-w-3xl mx-auto">{banner.description}</p>
                                <div className="flex flex-col sm:flex-row justify-center gap-7 mb-6">
                                    <button className="bg-white text-[#001F5B] px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-gray-100 transition cursor-pointer">
                                        Inscrivez-vous ici
                                    </button>
                                    <button className="bg-yellow-500 border-2 border-yellow-500 text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-yellow-500 cursor-pointer">
                                        Emploi du temps
                                    </button>
                                    <button className="bg-[#001F5B] border-2 border-[#001F5B] text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-[#001F5B] cursor-pointer">
                                        Programme pédagogique
                                    </button>
                                </div>
                                <p className="text-lg md:text-xl text-white font-medium mt-52">
                                    Habilitation MESupRES, suivant l'arrêté n°31309/2023
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition z-10"
                    aria-label="Previous slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition z-10"
                    aria-label="Next slide"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Indicators */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3.5 h-3.5 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;