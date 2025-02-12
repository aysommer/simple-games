import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import { Layout } from './components/layout';

const App: React.FC = () => {
   return (
      <BrowserRouter >
         <Layout>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Layout>
      </BrowserRouter>
   );
};

export default App;