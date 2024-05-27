export interface Movie {
    rank: number;
    image: string;
    name: string;
    year: string;
    time: string;
    point: string
};

export const SITE_URL = 'http://localhost:3000'
const APIKEY = process.env.APIKEY as string;
const token = process.env.TOKEN as string;

console.log(APIKEY, token)

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
      
      localStorage.setItem('movieData', JSON.stringify(data));
      console.log('Data saved to localStorage');
      console.log('Used remote api')
      return data as Movie[];
    } catch (error) {
      console.error('Error fetching data from url:', error);

      const res = await fetch(SITE_URL + '/top-250.json');
      const data = await res.json();

      localStorage.setItem('movieData', JSON.stringify(data));
      console.log('Data saved to localStorage');
      console.log('Used projet data :(')
      return data as Movie[];
    }
  };


  export const fetchSingleMovieData = async (movieTitle: string, year: string) => {
    const encodedTitle = movieTitle;//encodeURIComponent(movieTitle);
    const apiUrl = `http://www.omdbapi.com/?apikey=${token}&t=${encodedTitle}&y=${year}`;
    
    console.log(apiUrl)

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error('Error fetching movie data:', error);
      return null;
    }
  };