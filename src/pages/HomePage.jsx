import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get('https://api.koranime.fun/update/1');
        setUpdates(response.data.updates);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Kumanime - Latest Updates</title>
        <meta name="description" content="Stay updated with the latest manga and anime releases on Kumanime." />
        <meta name="keywords" content="anime, manga, updates, latest releases, Kumanime" />
        <meta property="og:title" content="Kumanime - Latest Updates" />
        <meta property="og:description" content="Stay updated with the latest manga and anime releases on Kumanime." />
        <meta property="og:image" content="https://yourwebsite.com/logo.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Latest Updates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {updates.map((update, index) => (
          <div key={index} className="border p-4 rounded">
            <img src={update.imgSrc} alt={update.title} className="w-full h-48 object-cover rounded mb-2" />
            <h2 className="text-xl font-bold">{update.title}</h2>
            <p className="text-gray-600">{update.type}</p>
            <Link to={update.href} className="text-blue-500">Read More</Link>
            <div className="mt-2">
              <Link to={update.chapter.href} className="text-blue-500">
                {update.chapter.title}
              </Link>
              <p className="text-gray-500">{update.chapter.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
