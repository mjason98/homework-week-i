import Image from "next/image";

interface FullMovie {
  Title: string;
  Year: string;
  Poster: string;
  imdbRating: number;
  Plot: string;
  Director: string;
  Writer: string;
  Actors: string;
  Genre: string;
  Language: string;
}

interface ShowMoviesComponentProps {
  movie: FullMovie;
}

const ShowMoviesComponent = ({ movie }: ShowMoviesComponentProps) => {
  return (
    <div className="flex flex-row w-full gap-6 px-10 mt-10 justify-center">
      <div className="flex flex-col items-center justify-center gap-2 max-w-[30%]">
        <Image
          className="w-full max-w-[400px] max-h-[500px] object-cover rounded-xl"
          src={movie.Poster}
          alt={movie.Title}
          width="300"
          height="600"
          priority
        />
        <div className="text-xl"> </div>
        <div className="flex flex-col gap-6 bg-blue-100 rounded-xl p-4 h-fit">
          <div className="text-xl jaro text-blue-600">Description</div>
          <div className="text-md poiret-one-regular font-bold">
            {movie.Plot}
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-[30%] gap-6">
        <div className="flex flex-col gap-6 bg-gray-100 rounded-xl p-4 h-fit">
          <div className="text-xl jaro text-gray-600">
            {movie.Title} ({movie.Year}){" "}
          </div>
          <div className="text-md poiret-one-regular font-bold">
            Rating: ⭐ {movie.imdbRating}
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-gray-100 rounded-xl p-4 h-fit">
          <div className="text-xl jaro text-gray-600">
            Languajes
          </div>
          <div className="text-md poiret-one-regular font-bold">
            {movie.Language}
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-gray-100 rounded-xl p-4 h-fit">
          <div className="text-xl jaro text-gray-600">
            Genre
          </div>
          <div className="text-md poiret-one-regular font-bold">
            {movie.Genre}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-fit gap-1 bg-amber-100 rounded-xl p-4 h-fit">
        <div className="text-xltext-amber-600">Director</div>
        <div className="text-md poiret-one-regular">{movie.Director}</div>
        <div className="text-xltext-amber-600">Writer</div>
        <div className="text-md poiret-one-regular">{movie.Writer}</div>
        <div className="text-xltext-amber-600">Actors</div>
        <div className="text-md poiret-one-regular">{movie.Actors}</div>
      </div>
    </div>
  );
};

export default ShowMoviesComponent;
