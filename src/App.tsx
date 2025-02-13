import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import { Layout } from './components/layout';

const App: React.FC = () => {
   return (
      <BrowserRouter >
         <ChakraProvider value={defaultSystem}>
            <Layout>
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="*" element={<NotFoundPage />} />
               </Routes>
            </Layout>
         </ChakraProvider>
      </BrowserRouter>
   );
};

export default App;