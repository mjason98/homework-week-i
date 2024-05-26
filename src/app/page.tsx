"use client";
import React, { useState } from 'react';
import MoviesComponent from './components/MoviesComponent';


const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='flex flex-col w-full items-center gap-5 p-5'>
      <div className='jaro text-8xl'> Fan Movie List </div>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearch}
        className="max-w-[80%]  w-[300px] p-3 border-2 border-gray-600 rounded-xl focus:border-gray-600 focus:outline-none"
      />
      <MoviesComponent searchTerm={searchTerm} />
    </div>
  );
}

export default Home;