import { motion } from 'framer-motion';

const mockPopularAnime = [
  { 
    id: 1, 
    title: 'Attack on Titan', 
    image: 'https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_FMjpg_UX1000_.jpg',
    rating: 9.0
  },
  { 
    id: 2, 
    title: 'Demon Slayer', 
    image: 'https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg',
    rating: 8.7
  },
  { 
    id: 3, 
    title: 'Jujutsu Kaisen', 
    image: 'https://m.media-amazon.com/images/M/MV5BZmRlYzE5YTAtOTMyOS00MTY3LTg2MmYtMTU5Y2E2ODg5ZjNiXkEyXkFqcGc@._V1_.jpg',
    rating: 8.8
  },
  { 
    id: 4, 
    title: 'My Hero Academia', 
    image: 'https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    rating: 8.4
  },
  { 
    id: 5, 
    title: 'Chainsaw Man', 
    image: 'https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-166836-ChainsawMan_GN16_C1_Web-3-9B_FdTzqTJLTeeHf8Af4Xg.jpg',
    rating: 8.7
  },
  { 
    id: 6, 
    title: 'Spy x Family', 
    image: 'https://images.justwatch.com/poster/301994635/s718/season-3.jpg',
    rating: 8.5
  },
  { 
    id: 7, 
    title: 'Vinland Saga', 
    image: 'https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_.jpg',
    rating: 8.8
  },
  { 
    id: 8, 
    title: 'One Piece', 
    image: 'https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    rating: 8.9
  },
];

const PopularPage = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h2 
        className="text-3xl font-bold text-purple-400 mb-8 relative inline-block"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🔥 Popular Anime
        <motion.span 
          className="absolute bottom-0 left-0 w-full h-1 bg-purple-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {mockPopularAnime.map((anime, index) => (
          <motion.div
            key={anime.id}
            className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="relative h-64 overflow-hidden">
              <motion.img
                src={anime.image}
                alt={anime.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <motion.h3 
                  className="text-white text-lg font-bold mb-1"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {anime.title}
                </motion.h3>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white text-sm">{anime.rating}</span>
                </div>
              </div>
              
              <motion.div 
                className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 500 }}
              >
                HOT
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PopularPage;