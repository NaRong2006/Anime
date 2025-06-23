import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SeasonalPage = () => {
  const seasons = [
    { name: 'Spring', emoji: '🌸', color: 'bg-pink-500' },
    { name: 'Summer', emoji: '☀️', color: 'bg-orange-500' },
    { name: 'Fall', emoji: '🍁', color: 'bg-amber-600' },
    { name: 'Winter', emoji: '❄️', color: 'bg-blue-500' }
  ];

  const seasonalAnime = {
    Spring: [
      { 
        title: 'Kaguya-sama: Love is War', 
        image: 'https://m.media-amazon.com/images/M/MV5BMTM1ZWViNWMtZWY2ZC00YmYyLTk1ZGEtMzRjOWI2YTM1OTI3XkEyXkFqcGc@._V1_.jpg',
        year: 2023,
        rating: 8.7,
        episodes: 12
      },
      { 
        title: 'Spy x Family', 
        image: 'https://images.squarespace-cdn.com/content/v1/571abd61e3214001fb3b9966/a76e4b18-bd55-41f5-8587-9f1b0fb4423c/Spy+x+Family%3A+the+Official+Anime+Guide%E2%80%94Mission+Report%3A+220409-0625',
        year: 2022,
        rating: 8.5,
        episodes: 25
      },
      { 
        title: 'Demon Slayer: Swordsmith Village Arc', 
        image: 'https://m.media-amazon.com/images/M/MV5BNDUyZTJmODQtZmRkMS00YjJiLTgxZmUtMjQ5OGNjNzkyM2Y5XkEyXkFqcGc@._V1_.jpg',
        year: 2023,
        rating: 9.0,
        episodes: 11
      }
    ],
    Summer: [
      { 
        title: 'Jujutsu Kaisen Season 2', 
        image: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2025/06/03170425_poster_w780.jpg',
        year: 2023,
        rating: 8.9,
        episodes: 23
      },
      { 
        title: 'Dr. Stone: New World', 
        image: 'https://www.awn.com/sites/default/files/styles/original/public/image/attached/1059516-drstonenewworldkeyvisual2x3-1280.jpg?itok=fK7_w1rc',
        year: 2023,
        rating: 8.4,
        episodes: 22
      },
      { 
        title: 'Mushoku Tensei: Jobless Reincarnation II', 
        image: 'https://m.media-amazon.com/images/I/812LyOp4tFL.jpg',
        year: 2023,
        rating: 8.6,
        episodes: 12
      }
    ],
    Fall: [
      { 
        title: 'Chainsaw Man', 
        image: 'https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-166836-ChainsawMan_GN16_C1_Web-3-9B_FdTzqTJLTeeHf8Af4Xg.jpg',
        year: 2022,
        rating: 8.7,
        episodes: 12
      },
      { 
        title: 'Mob Psycho 100 III', 
        image: 'https://m.media-amazon.com/images/I/81naNubUKZL._UF1000,1000_QL80_.jpg',
        year: 2022,
        rating: 8.9,
        episodes: 12
      },
      { 
        title: 'Bleach: Thousand-Year Blood War', 
        image: 'https://m.media-amazon.com/images/M/MV5BMDYyZDEzNzktNDVhNS00MjJiLWJlZjgtY2IzZDY0OTNjMDU3XkEyXkFqcGc@._V1_.jpg',
        year: 2022,
        rating: 8.8,
        episodes: 13
      }
    ],
    Winter: [
      { 
        title: 'Attack on Titan Final Season', 
        image: 'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_FMjpg_UX1000_.jpg',
        year: 2023,
        rating: 9.0,
        episodes: 12
      },
      { 
        title: 'Vinland Saga Season 2', 
        image: 'https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22703352/vinland_saga.jpg?quality=90&strip=all&crop=0,0,100,100',
        year: 2023,
        rating: 8.8,
        episodes: 24
      },
      { 
        title: 'The Eminence in Shadow', 
        image: 'https://m.media-amazon.com/images/M/MV5BMDFmMWJlMWYtMDFkNi00OWViLTkzOGEtNDI0YWNmM2M5MzI5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        year: 2023,
        rating: 8.3,
        episodes: 20
      }
    ]
  };

  const [selectedSeason, setSelectedSeason] = useState(seasons[0].name);

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
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="mb-12"
        >
          <motion.h1 
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Seasonal Anime
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover the hottest anime each season
          </motion.p>
        </motion.div>

        {/* Season Selector */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {seasons.map((season) => (
            <motion.button
              key={season.name}
              onClick={() => setSelectedSeason(season.name)}
              className={`px-6 py-3 rounded-full text-lg font-semibold transition-all flex items-center gap-2
                ${selectedSeason === season.name ? 
                  `${season.color} text-white shadow-lg` : 
                  'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">{season.emoji}</span>
              {season.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Anime Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSeason}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {seasonalAnime[selectedSeason].map((anime, index) => (
              <motion.div
                key={anime.title}
                className="relative group overflow-hidden rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Background Image */}
                <motion.div
                  className="h-80 bg-cover bg-center"
                  style={{ backgroundImage: `url(${anime.image})` }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    className="flex justify-between items-start mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
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
                    className="text-2xl font-bold text-white mb-1"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {anime.title}
                  </motion.h3>
                  
                  <motion.div
                    className="text-gray-300 text-sm mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {anime.episodes} Episodes
                  </motion.div>
                  
                  <motion.button
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Watchlist
                  </motion.button>
                </div>
                
                {/* Glow Effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, rgba(236, 72, 153, 0.3) 0%, transparent 70%)`
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SeasonalPage;