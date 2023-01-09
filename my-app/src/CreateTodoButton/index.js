import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal (prevState => !prevState);
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