import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { obtenerCitas, guardarCitas } from '../utils/localStorage';

function EditarCita() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');

  useEffect(() => {
    const citas = obtenerCitas();
    const cita = citas.find(c => c.id === id);
    if (cita) {
      setNombre(cita.paciente);
      setFecha(cita.fecha);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const citas = obtenerCitas();
    const nuevas = citas.map(c =>
      c.id === id ? { ...c, paciente: nombre, fecha } : c
    );
    guardarCitas(nuevas);
    navigate('/citas');
  };

  return (
    <div className="container">
      <h2>Editar Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre del Paciente</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <label>Fecha</label>
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        <button type="submit">Actualizar Cita</button>
      </form>
    </div>
  );
}

export default EditarCita;
