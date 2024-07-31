import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import loadingGif from '../assets/styles/share-icon.gif';

const HomePage = () => {
  const [updates, setUpdates] = useState([]);
  const [popularComics, setPopularComics] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdates = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.koranime.fun/update/${currentPage}`);
        setUpdates(response.data.updates);
        setTotalPages(response.data.totalPages);
        setPopularComics(response.data.popularComics);
      } catch (error) {
        console.error('Error fetching updates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <img src={loadingGif} alt="Loading..." className="w-16 h-16" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Kumanime - Home</title>
        <meta name="description" content="Welcome to Kumanime. Read the latest manga updates and popular comics." />
        <meta name="keywords" content="anime, manga, komik, Kumanime" />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Latest Updates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {updates.map((update, index) => (
          <div key={index} className="border p-4 rounded">
            <a href={update.href} className="text-blue-500">
              <img src={update.imgSrc} alt={update.title} className="w-full h-auto mb-2" />
              <h2 className="text-xl font-bold">{update.title}</h2>
            </a>
            <p className="text-gray-500">{update.type}</p>
            <a href={update.chapter.href} className="text-blue-500">{update.chapter.title}</a>
            <p className="text-gray-500">{update.chapter.date}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <span className="mx-4">{currentPage} / {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Popular Comics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularComics.map((comic, index) => (
          <div key={index} className="border p-4 rounded">
            <a href={comic.href} className="text-blue-500">
              <img src={comic.imgSrc} alt={comic.title} className="w-full h-auto mb-2" />
              <h2 className="text-xl font-bold">{comic.title}</h2>
            </a>
            <p className="text-gray-500">Rank: {comic.rank}</p>
            <p className="text-gray-500">Views: {comic.loveViews}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
