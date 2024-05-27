import MoviesComponent from './components/MoviesComponent';
import { fetchMovieData } from './types/movie';


const Home = async () => {
  const data = (await fetchMovieData()).sort(
          (a, b) => parseFloat(a.point) - parseFloat(b.point)
        );

  return (
    <div className='flex flex-col w-full items-center gap-5 p-5'>
      <div className='jaro text-8xl'> 250 Top Movies </div>
      <MoviesComponent movies={data} />
    </div>
  );
}

export default Home;