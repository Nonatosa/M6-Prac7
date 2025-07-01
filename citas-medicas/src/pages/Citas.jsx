import { Link } from 'react-router-dom';

const citasMock = [
  { id: '1', paciente: 'Ana Pérez' },
  { id: '2', paciente: 'Luis Gómez' },
];

function Citas() {
  return (
    <div className="container">
      <h2>Lista de Citas</h2>
      <ul>
        {citasMock.map(cita => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
              Cita de {cita.paciente}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
