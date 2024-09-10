import React from 'react';
import '../../css/filtros.css';

function Filtros({ filtros, setFiltros }) {
  const handleChange = (e) => {
    setFiltros({
      ...filtros,
      [e.target.name]: e.target.value,
    });
  };

  // Define las opciones de región disponibles
  const regiones = [
    "Todas",
    "Valle del Cauca",
    "Santander",
    "Boyacá",
    "Cundinamarca",
    "Bogotá",
    "Tolima",
    "Antioquia",
    "Eje Cafetero",
    "Orinoquia",
  ];

  return (
    <div className="filtros-container">
      <h3>Filtros de Búsqueda</h3>
      <label>
      <i className="bx bx-list-plus">                       
            <span className="link">Categoria: </span>
          </i>
        <select name="categoria" value={filtros.categoria} onChange={handleChange}>
          <option value="todas">Todas</option>
          <option value="dulce">Dulce</option>
          <option value="pasteleria">Pastelería</option>
          <option value="dulces_de_leche">Dulces de Leche</option>
        </select>
      </label>
      <label>
      <i className="bx bxs-map icon">                        
            <span className="link">Region: </span>
          </i>
        <select name="region" value={filtros.region} onChange={handleChange}>
          {regiones.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>
      <label>
      <i className="bx bx-money icon">
            <span className="link">Precio Min: </span>
          </i>
        <input
          className='filtrom'
          type="number"
          name="minPrecio"
          value={filtros.minPrecio}
          onChange={handleChange}
        />
      </label>
      <label>
      <i className="bx bx-money icon">
            <span className="link">Precio Max:</span>
          </i>
        <input
          className='filtrom'
          type="number"
          name="maxPrecio"
          value={filtros.maxPrecio}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default Filtros;