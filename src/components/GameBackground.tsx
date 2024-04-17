import React from "react";
import Image from "next/image";
import League from "../../public/img/bg-league-min.jpg";

const GameBackground: React.FC = () => {
  return (
    <div className="game-background absolute top-0 -z-10 mt-24 size-full w-[200%] overflow-hidden opacity-100 mix-blend-overlay md:w-[100%]">
      <Image src={League} alt="League" priority />
    </div>
  );
};

export default GameBackground;
