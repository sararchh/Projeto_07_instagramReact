import React from 'react';

const arraySugestao = [
  {
    id: 1,
    img: "assets/img/bad.vibes.memes.svg",
    name: 'bad.vibes.memes',
    reason: 'Segue você'
  },
  {
    id: 2,
    img: "assets/img/chibirdart.svg",
    name: 'chibirdart',
    reason: 'Segue você'
  },
  {
    id: 3,
    img: "assets/img/razoesparaacreditar.svg",
    name: 'razoesparaacreditar',
    reason: 'Novo no Instagram'
  },
  {
    id: 4,
    img: "assets/img/adorable_animals.svg",
    name: 'adorable_animals',
    reason: 'Segue você'
  },
  {
    id: 5,
    img: "assets/img/smallcutecats.svg",
    name: 'smallcutecats',
    reason: 'Segue você'
  },
]

export function Sugestao() {
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {arraySugestao.map((item) => (
        <div className="sugestao" key={item.id}>
          <div className="usuario">
            <img src={item.img} alt='imagem usuario'/>
            <div className="texto">
              <div className="nome">{item.name}</div>
              <div className="razao">{item.reason}</div>
            </div>
          </div>

          <div className="seguir">Seguir</div>
        </div>
      ))}


    </div>
  )
}