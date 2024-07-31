import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import loadingGif from '../assets/styles/share-icon.gif';

const KomikPage = () => {
  const { id } = useParams();
  const [comicData, setComicData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComicData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.koranime.fun/manga/${id}`);
        setComicData(response.data);
      } catch (error) {
        console.error('Error fetching comic data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComicData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <img src={loadingGif} alt="Loading..." className="w-16 h-16" />
      </div>
    );
  }

  if (!comicData) {
    return <div>Comic data not found.</div>;
  }

  const { title, thumbnail, firstChapter, lastChapter, rating, info, genres, synopsis, relatedManga, chapters } = comicData;

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>{title} - Kumanime</title>
        <meta name="description" content={synopsis} />
        <meta name="keywords" content={genres.map(genre => genre.title).join(', ')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={synopsis} />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:url" content={`https://kumanime.com/komik/${id}`} />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <img src={thumbnail} alt={title} className="w-full h-auto mb-4" />
      <div className="mb-4">
        <strong>First Chapter:</strong> <a href={firstChapter.link} className="text-blue-500">{firstChapter.text}</a>
      </div>
      <div className="mb-4">
        <strong>Last Chapter:</strong> <a href={lastChapter.link} className="text-blue-500">{lastChapter.text}</a>
      </div>
      <div className="mb-4">
        <strong>Rating:</strong> {rating}
      </div>
      <div className="mb-4">
        <p><strong>Judul Alternatif:</strong> {info['Judul Alternatif']}</p>
        <p><strong>Status:</strong> {info['Status']}</p>
        <p><strong>Jenis Komik:</strong> {info['Jenis Komik']}</p>
        <p><strong>Author:</strong> {info['Author']}</p>
        <p><strong>Artis:</strong> {info['Artis']}</p>
        <p><strong>Rilis:</strong> {info['Rilis']}</p>
        <p><strong>Serialisasi:</strong> {info['Serialisasi']}</p>
        <p><strong>Jumlah Pembaca:</strong> {info['Jumlah Pembaca']}</p>
      </div>
      <div className="mb-4">
        <strong>Genres:</strong> {genres.map(genre => (
          <a key={genre.title} href={genre.href} className="text-blue-500 mr-2">{genre.title}</a>
        ))}
      </div>
      <div className="mb-4">
        <strong>Synopsis:</strong> <p>{synopsis}</p>
      </div>
      <h2 className="text-xl font-bold mb-4">Chapters</h2>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index} className="mb-2">
            <a href={chapter.chapterLink} className="text-blue-500">{chapter.chapter}</a> - {chapter.chapterDate} <a href={chapter.downloadLink} className="text-blue-500">Download</a>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mt-8 mb-4">Related Manga</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {relatedManga.map((manga, index) => (
          <div key={index} className="border p-2 rounded">
            <a href={manga.href} className="text-blue-500">
              <img src={manga.img} alt={manga.title} className="w-full h-auto mb-2" />
              <h3 className="text-lg font-bold">{manga.title}</h3>
            </a>
            <p className="text-gray-500">{manga.infoAdditional}</p>
            <p className="text-gray-500">{manga.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KomikPage;
