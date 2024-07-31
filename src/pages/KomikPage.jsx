import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const KomikPage = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Kumanime - Komik ID: {id}</title>
        <meta name="description" content={`Read Komik ID: ${id} on Kumanime.`} />
        <meta name="keywords" content="anime, manga, komik, Kumanime" />
        <meta property="og:title" content={`Kumanime - Komik ID: ${id}`} />
        <meta property="og:description" content={`Read Komik ID: ${id} on Kumanime.`} />
        <meta property="og:image" content="https://yourwebsite.com/logo.png" />
        <meta property="og:url" content={`https://yourwebsite.com/komik/${id}`} />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Komik ID: {id}</h1>
      {/* Add content for the specific komik here */}
    </div>
  );
};

export default KomikPage;
