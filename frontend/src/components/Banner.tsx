import React from "react";
import banner from "../assets/Batman-Logo-2000.png";


const Banner: React.FC = () => {
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex mt-20">
            <div className="w-full md:w-1/2 md:mt-32">
            <div className="space-y-12">
                <h1 className="text-4xl font-bold">
                Bonjour, bienvenue sur le meilleur site de SuperHéros
                </h1>
                <p className="text-xl font-semibold">
                Vous pouvez ici intéragir avec une liste Superhéros, en ajoutant et même 
                en supprimer. Créer vous un compte maintenant ou connectez vous!
                </p>
            </div>
            </div>
            <div className="w-full md:w-1/2">
            <img src={banner} className="w-92 h-92" alt=""/>
            </div>
        </div>
    </>

  );
};

export default Banner;

