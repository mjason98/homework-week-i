export interface Movie {
    rank: number;
    image: string;
    name: string;
    year: string;
    time: string;
    point: string
};

export const SITE_URL = 'http://localhost:3000'
const token = process.env.APIKEY as string;
console.log('token', token)

export const fetchMovieData = async ():Promise<Movie[]> => {
    const url = 'https://imdb-top-250.p.rapidapi.com/api/imdb-top-250';
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'imdb-top-250.p.rapidapi.com',
          'x-rapidapi-key': token,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
    
      localStorage.setItem('movieData', JSON.stringify(data));
      console.log('Data saved to localStorage');

      return data as Movie[];
    } catch (error) {
      console.error('Error fetching data from url:', error);

      const res = await fetch(SITE_URL + '/top-250.json');
      const data = await res.json();

      localStorage.setItem('movieData', JSON.stringify(data));
      console.log('Data saved to localStorage');
      
      return data as Movie[];
    }
  };
