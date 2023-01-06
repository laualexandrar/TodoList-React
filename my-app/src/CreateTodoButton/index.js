import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg)
  };
  return (
    <button 
    className="CreateTodoButton"
    onClick={() => onClickButton('Aqui se deberia abrir el modal')} // las arrow functions son muy importantes para que no salga la alerta apenas recargo la pagina
    >
      +
    </button>
  );
}

export { CreateTodoButton };