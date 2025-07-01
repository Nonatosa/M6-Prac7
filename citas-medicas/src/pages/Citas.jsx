// src/pages/Citas.jsx
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Citas() {
  const [citas, setCitas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('citas')) || [];
    setCitas(data);
  }, []);

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((c) => c.id !== id);
    setCitas(nuevasCitas);
    localStorage.setItem('citas', JSON.stringify(nuevasCitas));
  };

  return (
    <div className="container">
      <h2>Lista de Citas</h2>
      <ul>
        {citas.length === 0 ? (
          <p>No hay citas registradas.</p>
        ) : (
          citas.map((c) => (
            <li key={c.id}>
              <div className="cita-info">
                <span className="nombre">{c.paciente}</span>
                <span className="fecha">{c.fecha}</span>
              </div>
              <div className="btn-group">
                <Link to={`/cita/${c.id}`} className="btn ver">Ver</Link>
                <button className="btn editar" onClick={() => navigate(`/editar-cita/${c.id}`)}>Editar</button>
                <button className="btn eliminar" onClick={() => eliminarCita(c.id)}>Eliminar</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Citas;
