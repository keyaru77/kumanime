import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import loadingGif from '../assets/share-icon.gif';

const KomikPage = () => {
  const { id } = useParams();
  const [manga, setManga] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const response = await axios.get(`https://api.koranime.fun/manga/${id}`);
        setManga(response.data);
      } catch (error) {
        console.error('Error fetching manga:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchManga();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <img src={loadingGif} alt="Loading..." className="w-16 h-16" />
      </div>
    );
  }

  if (!manga) {
    return <div>Error loading manga data.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Kumanime - {manga.title.trim()}</title>
        <meta name="description" content={`Read ${manga.title.trim()} on Kumanime.`} />
        <meta name="keywords" content="anime, manga, komik, Kumanime" />
        <meta property="og:title" content={`Kumanime - ${manga.title.trim()}`} />
        <meta property="og:description" content={`Read ${manga.title.trim()} on Kumanime.`} />
        <meta property="og:image" content={manga.thumbnail} />
        <meta property="og:url" content={`https://yourwebsite.com/komik/${id}`} />
      </Helmet>
      <div className="flex">
        <img src={manga.thumbnail} alt={manga.title.trim()} className="w-64 h-auto mr-4" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{manga.title.trim()}</h1>
          <p className="mb-2"><strong>Rating:</strong> {manga.rating}</p>
          <div className="mb-2">
            <strong>Genres:</strong>
            {manga.genres.map((genre, index) => (
              <span key={index} className="ml-2">
                <a href={genre.href} className="text-blue-500">{genre.title}</a>
              </span>
            ))}
          </div>
          <div className="mb-2">
            <strong>Info:</strong>
            <div className="ml-2">
              <p><span className="font-bold">Judul Alternatif:</span> {manga.info['Judul Alternatif']}</p>
              <p><span className="font-bold">Status:</span> {manga.info['Status']}</p>
              <p><span className="font-bold">Jenis Komik:</span> {manga.info['Jenis Komik']}</p>
              <p><span className="font-bold">Author:</span> {manga.info['Author']}</p>
              <p><span className="font-bold">Artis:</span> {manga.info['Artis']}</p>
              <p><span className="font-bold">Rilis:</span> {manga.info['Rilis']}</p>
              <p><span className="font-bold">Serialisasi:</span> {manga.info['Serialisasi']}</p>
              <p><span className="font-bold">Jumlah Pembaca:</span> {manga.info['Jumlah Pembaca']}</p>
            </div>
          </div>
          <p className="mb-4"><strong>Synopsis:</strong> {manga.synopsis.trim()}</p>
          <div className="mb-4">
            <a href={manga.firstChapter.link} className="text-blue-500 mr-4">{manga.firstChapter.text.trim()}</a>
            <a href={manga.lastChapter.link} className="text-blue-500">{manga.lastChapter.text.trim()}</a>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-8 mb-4">Chapters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {manga.chapters.map((chapter, index) => (
          <div key={index} className="border p-4 rounded">
            <a href={chapter.chapterLink} className="text-blue-500">
              {chapter.chapter.trim()}
            </a>
            <p className="text-gray-500">{chapter.chapterDate}</p>
            <a href={chapter.downloadLink} className="text-blue-500">Download</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KomikPage;
