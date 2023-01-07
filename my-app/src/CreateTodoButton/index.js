import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  };
  return (
    <button 
    className="CreateTodoButton"
    onClick={onClickButton} // las arrow functions son muy importantes para que no salga la alerta apenas recargo la pagina
    >
      +
    </button>
  );
}

export { CreateTodoButton };