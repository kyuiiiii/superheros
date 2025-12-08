import { Link } from "react-router-dom";

import React from "react";

interface HeroProps {
  id: number;
  name: string;
  images: {
    xs:string;
    sm: string;
    md:string;
    lg:string;
    _id:string;
  }
}

interface HeroCardProps {
  hero: HeroProps;
}


const HeroCard: React.FC<HeroCardProps> = ({hero}) => {
    return(
        <>
        <div className="mt-4 my-3 p-3">
        <div className="card card-side w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
            <figure>
                <img 
                    src={hero.images.md}
                    className="w-40 h-auto"
                />
            </figure>

            
            <div className="card-body">
                <h2 className="card-title">
                    {hero.name}
                </h2>
                <p></p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline"></div>
                    <Link
                        to={`/herodetails/${hero.id}`}
                        className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-yellow-500 hover:text-white duration-200"
                        >
                        Hero Details
                    </Link>
                </div>
            </div>
        </div>
        
      </div>
        
        </>
    );
};

export default HeroCard;