import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProductGrid from './components/ProductGrid';
import FeaturedVideo from './components/FeaturedVideo';
import Testimonials from './components/Testimonials';
import TrustElements from './components/TrustElements';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Header setSearchQuery={setSearchQuery} />
      <main>
        <Hero />
        <Benefits />
        <ProductGrid searchQuery={searchQuery} />
        <FeaturedVideo />
        <Testimonials />
        <TrustElements />
      </main>
      <Footer />
    </div>
  );
};

export default App;