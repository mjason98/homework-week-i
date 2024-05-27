import { fetchSingleMovieData } from "@/app/types/movie";
import Link from "next/link";
import ShowMoviesComponent from "@/app/components/ShowMovieComponent";

const CountryDetails = async ({ params }: { params: { movieName: string, year: string } }) => {
  const { movieName, year } = params;

  const data = await fetchSingleMovieData(movieName, year);

  return (
    <div className="flex flex-col remain-h items-center justify-center">
      <Link
        href="/"
        className="text-xl m-5 bg-amber-500 p-3 rounded-xl text-amber-100 hover:bg-amber-600"
      >
        back to list page
      </Link>
      <ShowMoviesComponent movie={data}/>
    </div>
  );
};

export default CountryDetails;
