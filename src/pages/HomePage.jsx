import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiPlus, FiChevronRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isHoveringCard, setIsHoveringCard] = useState(null);

  // Real anime data with actual image URLs from TMDB
  const heroSlides = [
    {
      id: 1,
      title: 'Jujutsu Kaisen: Shibuya Incident',
      description: 'The battle against curses intensifies as Yuji and his allies face their greatest challenge yet.',
      image: 'https://pbs.twimg.com/media/F3vlwWqXAAACSd9.jpg:large',
      genre: 'Action, Supernatural',
      year: 2023,
      rating: '4.9'
    },
    {
      id: 2,
      title: 'Demon Slayer: Swordsmith Village Arc',
      description: 'Tanjiro journeys to the Swordsmith Village to repair his sword and encounters new allies and demons.',
      image: 'https://m.media-amazon.com/images/M/MV5BNDUyZTJmODQtZmRkMS00YjJiLTgxZmUtMjQ5OGNjNzkyM2Y5XkEyXkFqcGc@._V1_.jpg',
      genre: 'Action, Fantasy',
      year: 2023,
      rating: '4.8'
    },
    {
      id: 3,
      title: 'Attack on Titan: Final Season',
      description: 'The war for Paradis zeroes in on Shiganshina just as Jaegerists have seized control.',
      image: 'https://snworksceo.imgix.net/ttd/dd98cc9a-86ba-4ff5-8395-3084026f7efd.sized-1000x1000.jpg?w=1000&dpr=2',
      genre: 'Action, Drama',
      year: 2023,
      rating: '4.9'
    }
  ];

  const trendingAnime = [
    { 
      id: 1, 
      title: 'Attack on Titan Final Season', 
      image: 'https://snworksceo.imgix.net/ttd/dd98cc9a-86ba-4ff5-8395-3084026f7efd.sized-1000x1000.jpg?w=1000&dpr=2', 
      episodes: 12, 
      year: 2023 
    },
    { 
      id: 2, 
      title: 'Chainsaw Man', 
      image: 'https://image.tmdb.org/t/p/w500/npdB6eFzizki0WaZ1OvKcJrWe97.jpg', 
      episodes: 12, 
      year: 2022 
    },
    { 
      id: 3, 
      title: 'Spy x Family Part 2', 
      image: 'https://image.tmdb.org/t/p/w500/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg', 
      episodes: 12, 
      year: 2022 
    },
    { 
      id: 4, 
      title: 'Vinland Saga Season 2', 
      image: 'https://a.storyblok.com/f/178900/1064x1505/08057613cb/66e3b2a6c5f4c45b9ba2126d98733bcc1666578842_main.png/m/filters:quality(95)format(webp)', 
      episodes: 12, 
      year: 2023 
    },
    { 
      id: 5, 
      title: 'Hell\'s Paradise', 
      image: 'https://m.media-amazon.com/images/M/MV5BZjhmMjhkNjUtMGU2MC00N2IzLTg1YzItZDk5ODMxMDYxODc0XkEyXkFqcGc@._V1_.jpg', 
      episodes: 12, 
      year: 2023 
    }
  ];

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="relative">
      {/* Hero Carousel with Parallax Effect */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlides[currentHeroIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10"
          >
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${heroSlides[currentHeroIndex].image})`,
                backgroundPosition: 'center 30%'
              }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: 'linear' }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center mb-4">
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-2 py-1 bg-red-500 text-xs font-bold rounded mr-3"
                >
                  NEW
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-300 text-sm"
                >
                  {heroSlides[currentHeroIndex].year} • {heroSlides[currentHeroIndex].genre}
                </motion.span>
              </div>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight"
              >
                {heroSlides[currentHeroIndex].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg text-gray-300 mb-6"
              >
                {heroSlides[currentHeroIndex].description}
              </motion.p>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium"
                >
                  <FiPlay className="mr-2" /> Watch Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-md text-white font-medium"
                >
                  <FiPlus className="mr-2" /> My List
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hero Indicators with Animation */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <motion.div 
            className="flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentHeroIndex(index)}
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-full transition-all ${currentHeroIndex === index ? 'bg-purple-500 w-6' : 'bg-gray-500'}`}
                layout
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Trending Section with Advanced Card Effects */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              Trending This Week
            </motion.h2>
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-purple-400 hover:text-purple-300"
            >
              View All <FiChevronRight className="ml-1" />
            </motion.button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {trendingAnime.map((anime) => (
              <motion.div
                key={anime.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                onHoverStart={() => setIsHoveringCard(anime.id)}
                onHoverEnd={() => setIsHoveringCard(null)}
                className="relative rounded-lg overflow-hidden group"
              >
                <motion.div
                  className="aspect-[2/3] bg-gray-800 relative overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {/* Glow Effect */}
                  {isHoveringCard === anime.id && (
                    <motion.div 
                      className="absolute inset-0 bg-purple-500/10 z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Anime Image */}
                  <motion.img
                    src={anime.image}
                    alt={anime.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: isHoveringCard === anime.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Play Button on Hover */}
                  <AnimatePresence>
                    {isHoveringCard === anime.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center z-10"
                      >
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <FiPlay className="text-white text-xl" />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* Info Card */}
                <motion.div 
                  className="mt-3 relative z-10"
                  animate={{ 
                    y: isHoveringCard === anime.id ? -10 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {anime.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {anime.year} • {anime.episodes} Episodes
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section with Floating Effect */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-white mb-8"
          >
            Browse by Category
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.4)'
                }}
                className="relative bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all overflow-hidden group"
              >
                {/* Animated Background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -50, y: -50 }}
                  whileHover={{ x: 0, y: 0 }}
                />
                
                <h3 className="font-medium text-white relative z-10">{category}</h3>
                <p className="text-sm text-gray-400 mt-1 relative z-10">200+ series</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;