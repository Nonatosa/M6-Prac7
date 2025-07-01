import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { obtenerCitas, guardarCitas } from '../utils/localStorage';

function CrearCita() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !fecha) return;

    const nuevaCita = {
      id: Date.now().toString(),
      paciente: nombre,
      fecha,
    };

    const citasActuales = obtenerCitas();
    guardarCitas([...citasActuales, nuevaCita]);

    navigate('/citas');
  };

  return (
    <div className="container">
      <h2>Crear Nueva Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre del Paciente</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <label>Fecha</label>
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <button type="submit">Guardar Cita</button>
      </form>
    </div>
  );
}

export default CrearCita;
