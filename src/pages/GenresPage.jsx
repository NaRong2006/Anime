import { motion } from 'framer-motion';

const GenresPage = () => {
  const genres = [
    { 
      name: 'Action', 
      image: 'https://m.media-amazon.com/images/S/pv-target-images/3744aa9cb5432db595ea5b0a1acb00b43a830a23db03acd455bc8b1aaa0df760.jpg', 
      count: 1250,
      color: 'from-red-600/90 to-red-900/70'
    },
    { 
      name: 'Adventure', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhLePphbbcn2dW1jxYcD1nZEDN0oqqPEeTw&s', 
      count: 980,
      color: 'from-blue-600/90 to-blue-900/70'
    },
    { 
      name: 'Comedy', 
      image: 'https://www.theactorspulse.com.au/assets/external/67af75d96cfffa46fba05879_physical-comedy.webp', 
      count: 1560,
      color: 'from-yellow-500/90 to-amber-700/70'
    },
    { 
      name: 'Drama', 
      image: 'https://wallpapercave.com/wp/wp12345678.jpg', 
      count: 870,
      color: 'from-purple-600/90 to-purple-900/70'
    },
    { 
      name: 'Fantasy', 
      image: 'https://i0.wp.com/joncronshaw.com/wp-content/uploads/2023/07/ac25f0b95cb588bde1705b96ca33a4fd68e938ff.jpeg?fit=1280%2C725&ssl=1', 
      count: 1340,
      color: 'from-green-600/90 to-emerald-900/70'
    },
    { 
      name: 'Romance', 
      image: 'https://breakinginthehabit.org/wp-content/uploads/2016/11/romance-box-1b75442dcb3e05ccbc614455b5ac2670.jpg', 
      count: 1120,
      color: 'from-pink-600/90 to-rose-900/70'
    },
    { 
      name: 'Sci-Fi', 
      image: 'https://assets.newatlas.com/dims4/default/9355c18/2147483647/strip/true/crop/1920x948+0+0/resize/1920x948!/format/webp/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbest-film-tv-2018-upcoming-3.jpg', 
      count: 760,
      color: 'from-indigo-600/90 to-violet-900/70'
    },
    { 
      name: 'Horror', 
      image: 'https://m.media-amazon.com/images/I/71F0zt9ZQdL._UF1000,1000_QL80_.jpg', 
      count: 420,
      color: 'from-gray-800/90 to-gray-950/70'
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
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
          EXPLORE GENRES
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Discover anime by your favorite categories
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {genres.map((genre, index) => (
            <motion.div
              key={genre.name}
              className="relative h-64 rounded-2xl overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1 * index,
                duration: 0.6,
                type: 'spring',
                stiffness: 80
              }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: '0 25px 50px -12px rgba(236, 72, 153, 0.25)'
              }}
            >
              {/* Background Image with Parallax Effect */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${genre.image})` }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${genre.color}`} />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6">
                <motion.div
                  className="self-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  <span className="text-xs font-semibold text-white/80">
                    {genre.count}+ Titles
                  </span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * index, duration: 0.5 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {genre.name}
                  </h3>
                  <motion.div
                    className="w-12 h-1 bg-pink-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4 * index, duration: 0.5 }}
                  />
                </motion.div>
                
                {/* Hidden Explore Button */}
                <motion.div
                  className="self-end opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-sm font-semibold text-white shadow-lg transition-all">
                    Explore →
                  </button>
                </motion.div>
              </div>
              
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, rgba(236, 72, 153, 0.4) 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GenresPage;