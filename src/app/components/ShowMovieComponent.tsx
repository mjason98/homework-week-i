import { useState, useEffect } from "react";
import Image from "next/image";

import { Movie } from "../types/movie";

interface ShowMoviesComponentProps {
  pos: number;
}

const getDataFromLocalStorage = (pos:number) => {
    const data = localStorage.getItem('movieData');
    if (data) {
      return JSON.parse(data)[pos-1] as Movie;
    }
    return null;
  };

const ShowMoviesComponent = ({ pos }: ShowMoviesComponentProps) => {
  const [movie, _] = useState<Movie|null>(getDataFromLocalStorage(pos));

  useEffect(() => {
    
  }, [pos]);

  return (
    <div>
      {movie && (
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            className="w-full max-w-[400px] max-h-[500px] object-cover rounded-xl"
            src={movie.image}
            alt={movie.name}
            width="300"
            height="600"
            priority
          />
          <div className="text-2xl mt-4">
            {movie.name} ({movie.year}){" "}
          </div>
          <div className="text-xl">⭐ {movie.point} </div>
        </div>
      )}
    </div>
  );
};

export default ShowMoviesComponent;
