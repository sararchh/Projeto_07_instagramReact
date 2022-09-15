import React from 'react';

export function User() {
  const [name, setName] = React.useState(null);
  const [imageUser, setImageUser] = React.useState(null);

  const handleEditName = () => {
    let nameUser = prompt('Digite seu nome:');
    setName(nameUser);
  };

  const handleEditImage = () => {
    let imageUser = prompt('Digite url da imagem:');
    setImageUser(imageUser);
  };

  return (
    <div className="usuario">
      <img onClick={handleEditImage} src={!imageUser ? 'assets/img/catanacomics.svg' : imageUser} alt='imagem do usuario' />
      <div className="texto">
        <strong>{!name ? 'Visitante' : name}</strong>
        <span>
          {!name ? 'Visitante' : name}
          <ion-icon name="pencil" onClick={handleEditName} ></ion-icon>
        </span>
      </div>
    </div>
  )
}