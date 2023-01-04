import React from 'react';
import './TodoCounter.css';

// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow', // iniciar cada palabra con mayuscula no con -
// }

function TodoCounter() {
  return (
    <h2 className="TodoCounter">Has completado 2 de 3 TODOs</h2>
  );
}

export { TodoCounter };