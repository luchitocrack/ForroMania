import React, { useState, useEffect } from 'react';
import productosData from '../assets/productos.json'; // Importar datos desde el JSON
import '../Styles/Producto.css'; // Importar el archivo CSS del producto

const Producto = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosData);
    }, []);

    // Función para obtener la ruta de la imagen
    const getImagenCatalogo = (nombreImagen) => {
        return new URL(`../assets/img/${nombreImagen}`, import.meta.url).href;
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Encabezado de Productos */}
            <header className="bg-blue-600 text-white py-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold">Nuestros Productos</h1>
                </div>
            </header>

            {/* Contenido de Productos */}
            <main className="container mx-auto p-6">
                <section>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {productos.map((producto) => (
                            <div key={producto.id} className="producto-container">
                                <div className="producto-imagen-container">
                                    <img
                                        src={getImagenCatalogo(producto.imagen)} // Ruta a la imagen usando la función
                                        alt={producto.nombre}
                                        className="producto-imagen"
                                    />
                                </div>
                                <div className="producto-contenido">
                                    <h2 className="producto-titulo">{producto.nombre}</h2>
                                    <p className="producto-descripcion">{producto.descripcion}</p>
                                    <p className="producto-precio">{`$${producto.precio}`}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4 mt-8">
                <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Producto;
