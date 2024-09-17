import React, { useState, useEffect } from 'react';
import "../Styles/Carrucel.css"; // Importar el archivo CSS del carrusel

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "anuncio.jpg",
    "anuncio_2.jpg",
    "anuncio_3.jpg"
  ];
  const totalSlides = images.length;
  const slideInterval = 3000; // Intervalo de cambio de imagen en milisegundos

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const getImageSrc = (imageName) => {
    return new URL(`../assets/img/${imageName}`, import.meta.url).href;
  };

  return (
    <div className="carrusel-container">
      <div className="carrusel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carrusel-slide">
            <img src={getImageSrc(image)} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carrusel-prev" onClick={handlePrevClick}>‹</button>
      <button className="carrusel-next" onClick={handleNextClick}>›</button>
    </div>
  );
};

export default Carrusel;

