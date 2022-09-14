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
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {arraySugestao.map((item) => (
        <div class="sugestao">
          <div class="usuario">
            <img src={item.img} />
            <div class="texto">
              <div class="nome">{item.name}</div>
              <div class="razao">{item.reason}</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
      ))}


    </div>
  )
}