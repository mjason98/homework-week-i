"use client";
import ShowMoviesComponent from "@/app/components/ShowMovieComponent";
import Link from "next/link";

const CountryDetails = ({ params }: { params: { movieId: number } }) => {
  const { movieId } = params;

  return (
    <div className="flex flex-col remain-h items-center justify-center">
      <Link href="/" className="text-xl m-5 bg-amber-500 p-3 rounded-xl text-amber-100 hover:bg-amber-600">back to list page</Link>
      <ShowMoviesComponent pos={movieId}/>
    </div>
  );
};

export default CountryDetails;
