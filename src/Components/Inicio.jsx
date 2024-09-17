import React, { useState, useEffect } from "react";
import productosData from "../assets/productos.json";
import "../Styles/inicio.css"; // Importar el archivo CSS

const Inicio = () => {
  const [productosPromocion, setProductosPromocion] = useState([]);

  useEffect(() => {
    // Filtrar los productos que están en promoción
    const productosFiltrados = productosData.filter(
      (producto) => producto.promocion === "si"
    );
    // Tomar solo los primeros 6 productos en promoción
    setProductosPromocion(productosFiltrados.slice(0, 6));
  }, []);

  const getImagenCatalogo = (nombreImagen) => {
    return new URL(`../assets/img/${nombreImagen}`, import.meta.url).href;
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* Productos en Promoción */}
      <h1 className="text-center text-2xl font-bold mb-4">Promociones</h1>
      <div className="productos-container">
        {productosPromocion.map((producto) => (
          <div key={producto.id} className="producto-item">
            <img
              className="producto-imagen"
              src={getImagenCatalogo(producto.imagen)}
              alt={producto.nombre}
            />
            <h2 className="producto-nombre">{producto.nombre}</h2>
            <p className="producto-precio">${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;

