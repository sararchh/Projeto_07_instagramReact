import React from 'react';

export function User() {
  const [name, setName] = React.useState(null);

  const handleEditName = () => {
    let nameUser = prompt('Digite seu nome:');
    setName(nameUser);
  };

  return (
    <div className="usuario">
      <img src="assets/img/catanacomics.svg" alt='imagem do usuario' />
      <div className="texto">
        <strong>catanacomics</strong>
        <span>
          {!name ? 'Visitante' : name}
          <ion-icon name="pencil" onClick={handleEditName} ></ion-icon>
        </span>
      </div>
    </div>
  )
}