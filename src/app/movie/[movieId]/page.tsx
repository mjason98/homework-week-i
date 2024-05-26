"use client";
// import CountryShow from "../components/CountryShow";
import Image from "next/image";
import { Movie } from "@/app/types/movie";
import { useState } from "react";

const CountryDetails = ({ params }: { params: { movieId: number } }) => {
  const { movieId } = params;
  const [movie, setMovie] = useState<Movie>();
  

  return (
    <div className="flex flex-col remain-h items-center justify-center">
      <div>back to list page</div>
      {/* <CountryShow countryName={countryName} /> */}
      {movie && (
      <div>
      <Image
        className="w-full max-w-[400px] max-h-[500px] object-cover rounded-xl"
        src={movie.image}
        alt={movie.name}
        width="300"
        height="600"
        priority
      />
      <div className="text-5xl">
        {movie.name} ({movie.year}){" "}
      </div>
      <div className="text-2xl">⭐ {movie.point} </div>
      </div>
        )}
    </div>
  );
};

export default CountryDetails;
