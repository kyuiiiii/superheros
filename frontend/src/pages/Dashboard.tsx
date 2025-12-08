import React, { useEffect, useState } from "react";
import HeroCard from "../components/HeroCard";
import SearchBar from "../components/Searchbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

interface HeroProps {
  id: number;
  name: string;
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    _id: string;
  };
}

const Dashboard: React.FC = () => {
  const [hero, setHero] = useState<HeroProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const getHero = async () => {
      try {
        const res = await axios.get<HeroProps[]>("http://localhost:4001/heros");
        setHero(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHero();
  }, []);

  const filteredHeroes = hero.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 0,
    rows: 2,
    slidersPerRow: 2,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

        <div className="mb-6">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search heroes by name..."
          />
        </div>

        <div>
          {filteredHeroes.length > 0 ? (
            <Slider {...settings}>
              {filteredHeroes.map((item) => (
                <HeroCard key={item.id} hero={item} />
              ))}
            </Slider>
          ) : (
            <div className="text-center p-10 text-gray-500">
              Aucun héro trouvé
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
