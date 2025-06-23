import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiBell, FiUser, FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import { FaDiscord, FaTwitter, FaReddit } from 'react-icons/fa';

// Enhanced anime data with more details
const trendingAnime = [
  {
    id: 1,
    title: 'Jujutsu Kaisen S2',
    image: 'https://images.justwatch.com/poster/306336521/s718/season-2.jpg',
    rating: 8.7,
    episodes: 23,
    year: 2023,
    genres: ['Action', 'Supernatural', 'Dark Fantasy'],
    studio: 'MAPPA'
  },
  {
    id: 2,
    title: 'One Piece: Wano',
    image: 'https://image.tmdb.org/t/p/w780/m80kPdrmmtEh9wlLroCp0bwUGH0.jpg',
    rating: 9.1,
    episodes: 150,
    year: 2022,
    genres: ['Adventure', 'Fantasy', 'Shounen'],
    studio: 'Toei Animation'
  },
  {
    id: 3,
    title: 'Demon Slayer S3',
    image: 'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-81192,resizemode-75,msid-100686970/news/international/us/demon-slayer-season-3-see-total-number-of-episodes-when-will-it-end.jpg',
    rating: 8.9,
    episodes: 11,
    year: 2023,
    genres: ['Action', 'Supernatural', 'Historical'],
    studio: 'ufotable'
  },
  {
    id: 4,
    title: 'Chainsaw Man',
    image: 'https://image.tmdb.org/t/p/w780/npdB6eFzizki0WaZ1OvKcJrWe97.jpg',
    rating: 8.8,
    episodes: 12,
    year: 2022,
    genres: ['Action', 'Horror', 'Dark Comedy'],
    studio: 'MAPPA'
  },
  {
    id: 5,
    title: 'Attack on Titan: Final Season',
    image: 'https://m.media-amazon.com/images/M/MV5BNzVjOWEwYjEtNDJhOC00YjUyLThjMWItMDQwZGY1ODM4YzI3XkEyXkFqcGc@._V1_.jpg',
    rating: 9.2,
    episodes: 28,
    year: 2023,
    genres: ['Action', 'Drama', 'Dark Fantasy'],
    studio: 'MAPPA'
  }
];

const navItems = [
  { name: 'Home', path: '/', icon: '🏠' },
  { name: 'Popular', path: '/popular', icon: '🔥' },
  { name: 'Genres', path: '/genres', icon: '🎭' },
  { name: 'Seasonal', path: '/seasonal', icon: '🌸' },
  { name: 'My List', path: '/mylist', icon: '📋' },
];

const MainLayout = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const carouselRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans overflow-x-hidden">
      {/* --- Dynamic Header --- */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-xl' : 'bg-gradient-to-b from-gray-900/80 to-transparent py-4'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo with animation */}
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <NavLink to="/" className="flex items-center">
                <motion.span 
                  className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%'],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 4,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  AnimeHub
                </motion.span>
              </NavLink>
            </motion.div>

            {/* Desktop Navigation with staggered animations */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
                      px-3 py-2 text-sm font-medium rounded-md transition-all
                      ${isActive ? 'text-white bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}
                      flex items-center gap-2
                    `}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Search & User Controls */}
            <div className="flex items-center space-x-3">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:flex items-center bg-gray-800/50 rounded-full px-3 py-1.5"
              >
                <FiSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search anime..."
                  className="bg-transparent border-none focus:outline-none text-sm w-40 placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </motion.div>

              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-300 hover:text-white relative"
              >
                <FiBell className="w-5 h-5" />
                <motion.span 
                  className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-300 hover:text-white"
              >
                <FiUser className="w-5 h-5" />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Slides in from right with cool animation) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/70 z-40"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="md:hidden fixed inset-y-0 right-0 w-80 bg-gray-900 shadow-2xl z-50"
              >
                <div className="flex flex-col h-full p-6">
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search anime..."
                        className="w-full bg-gray-800 rounded-md px-10 py-3 text-white placeholder-gray-400"
                      />
                    </motion.div>
                  </div>
                  <nav className="flex-1 space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.05 * index }}
                      >
                        <NavLink
                          to={item.path}
                          className={({ isActive }) => `
                            flex items-center justify-between px-4 py-3 rounded-lg
                            ${isActive ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : 'text-gray-300 hover:bg-gray-800'}
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.name}</span>
                          </div>
                          <FiChevronRight />
                        </NavLink>
                      </motion.div>
                    ))}
                  </nav>
                  <motion.div 
                    className="mt-auto pt-6 border-t border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <button className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                      Sign In
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      {/* --- Main Content --- */}
      <main className="pt-24 pb-12">
        {/* Parallax Trending Carousel */}
        <section 
          ref={carouselRef}
          className="relative h-[80vh] overflow-hidden mb-12"
        >
          <motion.div 
            style={{ y }}
            className="absolute inset-0 bg-gray-900"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                  Trending Now
                </motion.h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium"
                >
                  View All
                </motion.button>
              </div>
            </div>
            <div className="grid grid-cols-5 h-full">
              {trendingAnime.map((anime, index) => (
                <motion.div
                  key={anime.id}
                  className="relative h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Anime Cards Grid with 3D hover effect */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {trendingAnime.map((anime) => (
              <motion.div
                key={anime.id}
                className="relative rounded-xl overflow-hidden aspect-[2/3] bg-gray-800 cursor-pointer"
                whileHover="hover"
                onHoverStart={() => setHoveredCard(anime.id)}
                onHoverEnd={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  variants={{
                    hover: { scale: 1.05 }
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div
                  variants={{
                    hover: { opacity: 1 }
                  }}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10 flex flex-col justify-end p-4"
                >
                  <motion.div
                    variants={{
                      hover: { y: 0 }
                    }}
                    initial={{ y: 20 }}
                    className="space-y-2"
                  >
                    <h3 className="text-white font-bold text-lg">{anime.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400 text-sm">★ {anime.rating}</span>
                      <span className="text-gray-300 text-sm">• {anime.episodes} eps</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {anime.genres.slice(0, 2).map((genre, i) => (
                        <span key={i} className="text-xs bg-gray-800/70 text-gray-300 px-2 py-0.5 rounded">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Glow effect on hover */}
                {hoveredCard === anime.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%)`
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Page Content with smooth transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* --- Footer with wave animation --- */}
      <footer className="relative bg-gray-900 border-t border-gray-800 pt-20 pb-8 overflow-hidden">
        {/* Animated wave background */}
        <motion.div 
          animate={{ x: ['0%', '-50%', '0%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="absolute top-0 left-0 w-[200%] h-full opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='%23ffffff' opacity='.25'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' fill='%23ffffff' opacity='.5'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '50% 100%',
            height: '100px'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8"
          >
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <motion.li 
                    key={item.path}
                    whileHover={{ x: 5 }}
                  >
                    <NavLink to={item.path} className="text-sm text-gray-400 hover:text-white">
                      {item.name}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                {['Terms', 'Privacy', 'DMCA', 'Contact'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="text-sm text-gray-400 hover:text-white">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Connect</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <FaDiscord className="w-5 h-5" />, name: 'Discord' },
                  { icon: <FaTwitter className="w-5 h-5" />, name: 'Twitter' },
                  { icon: <FaReddit className="w-5 h-5" />, name: 'Reddit' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="text-gray-400 hover:text-white"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-6 border-t border-gray-800 text-center text-sm text-gray-400"
          >
            © {new Date().getFullYear()} AnimeHub. Not affiliated with any studio.
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;