import { useState } from 'react';

const datosIniciales = [
  { id: 1, nombre: '1. Aviso de privacidad exhibido en mostrador', propiedad: 'Hallazgo' },
  { id: 2, nombre: '2. Registros de borrado seguro', propiedad: 'Hallazgo' },
  { id: 3, nombre: '3. Aviso de videovigilancia en entrada', propiedad: 'Hallazgo' },
  { id: 4, nombre: '4. Capacitación del personal en protección de datos', propiedad: 'Hallazgo' },
  { id: 5, nombre: '5. Control de acceso', propiedad: 'Hallazgo' },
  { id: 6, nombre: '6. Principios de protección de datos personales', propiedad: 'Hallazgo' },
  { id: 7, nombre: '7. Proceso de cero papel', propiedad: 'Hallazgo' },
  { id: 8, nombre: '8. Política de uso de hojas recicladas', propiedad: 'Hallazgo' },
  { id: 9, nombre: '9. Vulneración de datos personales', propiedad: 'Hallazgo' },
  { id: 10, nombre: '10. Sellado de sobres de resultados', propiedad: 'Hallazgo' },
  { id: 11, nombre: '11. Archivo muerto', propiedad: 'Hallazgo' },
  { id: 12, nombre: '12. Expedientes de colaboradores', propiedad: 'Hallazgo' },
];
 
export default function ReactivoTable() {
  const [reactivos, setReactivos] = useState(datosIniciales);

  const modificarTexto = (id, campo, valor) => {
    const nuevos = reactivos.map(r => 
      r.id === id ? { ...r, [campo]: valor } : r
    );
    setReactivos(nuevos);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Reactivo</th>
          <th>Descripción del hallazgo</th>
        </tr>
      </thead>
      <tbody>
        {reactivos.map((r) => (
          <tr key={r.id}>
            <td>{r.nombre}</td>
            <td>
              <input
                type="text"
                value={r.propiedad}
                onChange={(e) => modificarTexto(r.id, 'propiedad', e.target.value)}
              />
            </td>
        
          </tr>
        ))}
      </tbody>
    </table>
  );
}