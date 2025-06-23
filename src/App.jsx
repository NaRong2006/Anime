import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AnimeListPage from './pages/AnimeListPage';
import GenresPage from './pages/GenresPage';
import PopularPage from './pages/PopularPage';
import SeasonalPage from './pages/SeasonalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="popular" element={<PopularPage />} />
          <Route path="mylist" element={<AnimeListPage />} />
          <Route path="genres" element={<GenresPage />} />
         <Route path="seasonal" element={<SeasonalPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
