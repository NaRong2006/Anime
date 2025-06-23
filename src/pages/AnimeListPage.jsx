import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimeListPage = () => {
  const [animeList, setAnimeList] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    // Simulate API loading with delay
    const timer = setTimeout(() => {
      setAnimeList([
        {
          id: 1,
          title: 'Naruto: Shippuden',
          image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
          rating: 8.24,
          episodes: 500,
          year: 2007,
          genres: ['Action', 'Adventure', 'Fantasy']
        },
        {
          id: 2,
          title: 'One Piece',
          image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
          rating: 8.58,
          episodes: 1000,
          year: 1999,
          genres: ['Action', 'Adventure', 'Comedy']
        },
        {
          id: 3,
          title: 'Bleach: Thousand-Year Blood War',
          image: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
          rating: 9.10,
          episodes: 13,
          year: 2022,
          genres: ['Action', 'Fantasy', 'Supernatural']
        },
        {
          id: 4,
          title: 'Death Note',
          image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
          rating: 8.62,
          episodes: 37,
          year: 2006,
          genres: ['Mystery', 'Psychological', 'Thriller']
        },
        {
          id: 5,
          title: 'Fullmetal Alchemist: Brotherhood',
          image: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg',
          rating: 9.10,
          episodes: 64,
          year: 2009,
          genres: ['Action', 'Adventure', 'Drama']
        },
        {
          id: 6,
          title: 'Attack on Titan',
          image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
          rating: 8.54,
          episodes: 75,
          year: 2013,
          genres: ['Action', 'Drama', 'Fantasy']
        },
        {
          id: 7,
          title: 'Demon Slayer: Kimetsu no Yaiba',
          image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
          rating: 8.66,
          episodes: 26,
          year: 2019,
          genres: ['Action', 'Fantasy', 'Supernatural']
        },
        {
          id: 8,
          title: 'Jujutsu Kaisen',
          image: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
          rating: 8.63,
          episodes: 24,
          year: 2020,
          genres: ['Action', 'Fantasy', 'Horror']
        }
      ]);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <motion.h1 
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Anime Collection
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover the best anime series
          </motion.p>
        </motion.div>

        {/* Loading Skeleton */}
        {animeList.length === 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 rounded-xl h-64"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
          </div>
        )}

        {/* Anime Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <AnimatePresence>
            {animeList.map((anime) => (
              <motion.div
                key={anime.id}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredId(anime.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                {/* Card */}
                <motion.div className="relative h-full rounded-xl overflow-hidden shadow-lg">
                  {/* Image with parallax effect */}
                  <motion.div
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${anime.image})` }}
                    initial={{ scale: 1 }}
                    animate={{ scale: hoveredId === anime.id ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <motion.div
                      className="flex justify-between items-start mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {anime.year}
                      </span>
                      <div className="flex items-center bg-black/70 px-2 py-1 rounded">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-white text-sm">{anime.rating}</span>
                      </div>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-bold text-white mb-1"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {anime.title}
                    </motion.h3>
                    
                    <motion.div
                      className="flex flex-wrap gap-1 mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {anime.genres.slice(0, 2).map((genre, i) => (
                        <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {genre}
                        </span>
                      ))}
                    </motion.div>
                    
                    <motion.button
                      className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
                
                {/* Glow effect */}
                {hoveredId === anime.id && (
                  <motion.div 
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      boxShadow: '0 0 30px 10px rgba(192, 132, 252, 0.3)'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimeListPage;