import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Movie, fetchMovieData } from "../types/movie";

interface MoviesComponentProps {
  searchTerm: string;
}

const MoviesComponent = ({ searchTerm }: MoviesComponentProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [hoveredMovieId, setHoveredMovieId] = useState<number | null>(null);


  useEffect(() => {
    fetchMovieData().then((data: Movie[]) => {
      setMovies(data);
    });

    const seenMovies = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(seenMovies);
  }, []);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchTerm, movies]);

  const toggleFavorite = (id: number) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleMouseMove = (event: React.MouseEvent, movieRank: number) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    setHoveredMovieId(movieRank);
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
    setHoveredMovieId(null);
  };

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 mx-3 px-4 overflow-auto custom-h">
      {filteredMovies.map((movie, index) => (
        <div
          className="flex flex-col items-center justify-between  bg-gray-200 rounded-xl py-3"
          key={movie.rank}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={`/movie/${movie.rank}`}
            className="flex flex-col gap-3 p-2 items-stretch space-y-4 w-full"
          >
            <Image
              className="w-full h-[400px] object-cover rounded-xl"
              src={movie.image}
              alt={movie.name}
              width="300"
              height="300"
              priority
            />
          </Link>
          {favorites.includes(movie.rank) ? (
            <div>✅</div>
          ) : (
            <button
              onClick={() => toggleFavorite(movie.rank)}
              className="bg-gray-300 w-[70%] rounded-lg p-1 hover:bg-gray-600 hover:text-white"
            >
              ⭐ mark as favorite
            </button>
          )}
        </div>
      ))}
      {mousePosition && hoveredMovieId !== null && (
        <div
          className="absolute bg-white border border-gray-500 rounded-lg p-2"
          style={{
            top: mousePosition.y + 10,
            left: mousePosition.x + 10,
          }}
        >
          <p>{movies[hoveredMovieId].name} ({movies[hoveredMovieId].year}) ⭐ raiting: {movies[hoveredMovieId].point} </p>
        </div>
      )}
    </div>
  );
};

export default MoviesComponent;
