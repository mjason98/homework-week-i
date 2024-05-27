import movietop250data from './top-250.json'
export interface Movie {
    rank: number;
    image: string;
    name: string;
    year: string;
    time: string;
    point: string
};

const APIKEY = process.env.APIKEY as string;
const token = process.env.TOKEN as string;

export const fetchMovieData = async ():Promise<Movie[]> => {
    const url = 'https://imdb-top-250.p.rapidapi.com/api/imdb-top-250';
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'imdb-top-250.p.rapidapi.com',
          'x-rapidapi-key': APIKEY,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      
      console.log('Used remote api')
      return data as Movie[];
    } catch (error) {
      console.error('Error fetching data from url:', error);
      console.log('Used projet data :(')
      return movietop250data as Movie[];
    }
  };


  export const fetchSingleMovieData = async (movieTitle: string, year: string) => {
    const encodedTitle = movieTitle;//encodeURIComponent(movieTitle);
    const apiUrl = `http://www.omdbapi.com/?apikey=${token}&t=${encodedTitle}&y=${year}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return null;
    }
  };