import React from 'react';

const arraySugestao = [
  {
    id: 1,
    img: "assets/img/bad.vibes.memes.svg",
    name: 'bad.vibes.memes',
    reason: 'Segue você',
    follow: false,
  },
  {
    id: 2,
    img: "assets/img/chibirdart.svg",
    name: 'chibirdart',
    reason: 'Segue você',
    follow: false,
  },
  {
    id: 3,
    img: "assets/img/razoesparaacreditar.svg",
    name: 'razoesparaacreditar',
    reason: 'Novo no Instagram',
    follow: false,
  },
  {
    id: 4,
    img: "assets/img/adorable_animals.svg",
    name: 'adorable_animals',
    reason: 'Segue você',
    follow: false,
  },
  {
    id: 5,
    img: "assets/img/smallcutecats.svg",
    name: 'smallcutecats',
    reason: 'Segue você',
    follow: false,
  },
]

export function Sugestao() {

  const [suggestion, setSuggestion] = React.useState(arraySugestao);

  const handleFollowUser = (item) => {
    let newArray = [...suggestion];

    const selected = arraySugestao.findIndex((i) => i.id === item.id);
    newArray[selected] = { ...newArray[selected], follow: !newArray[selected].follow }

    setSuggestion(newArray);
  }

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {suggestion.map((item) => (
        <div className="sugestao" key={item.id}>
          <div className="usuario">
            <img src={item.img} alt='imagem usuario' />
            <div className="texto">
              <div className="nome">{item.name}</div>
              <div className="razao">{item.reason}</div>
            </div>
          </div>

          <button onClick={() => handleFollowUser(item)}>
            <div className="seguir">{item.follow ? 'Seguindo' : 'Seguir'}</div>
          </button>
        </div>
      ))}


    </div>
  )
}