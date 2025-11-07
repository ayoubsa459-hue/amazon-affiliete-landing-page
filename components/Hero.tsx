import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-20 md:py-32 text-white" 
      style={{ backgroundImage: "url('https://cdn.arabsstock.com/uploads/images/244682/og-kX5GrzKk5p.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Shop Smart, Save Big!
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          Explore our curated selection of top-rated products and exclusive deals from across Amazon. Your smart shopping journey starts here. ✨
        </p>
        <a
          href="#products"
          className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 inline-block"
        >
          Discover Top Picks
        </a>
      </div>
    </section>
  );
};

export default Hero;