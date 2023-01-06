import React from 'react';
import './TodoCounter.css';

// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow', // iniciar cada palabra con mayuscula no con -
// }

function TodoCounter({total, completed}) {
  
  return (
    <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  );
}

export { TodoCounter };