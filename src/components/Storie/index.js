import React from 'react';

const arrayUser = [
  {
    id: 1,
    img: "assets/img/9gag.svg",
    name: '9gag'
  },
  {
    id: 2,
    img: "assets/img/meowed.svg",
    name: 'meowed'
  },
  {
    id: 3,
    img: "assets/img/barked.svg",
    name: 'barked'
  },
  {
    id: 4,
    img: "assets/img/wawawicomics.svg",
    name: 'wawawicomics'
  },
  {
    id: 5,
    img: "assets/img/respondeai.svg",
    name: 'respondeai'
  },
  {
    id: 6,
    img: "assets/img/filomoderna.svg",
    name: 'filomoderna'
  },
  {
    id: 7,
    img: "assets/img/gato-telefone.svg",
    name: 'gato'
  },
  {
    id: 8,
    img: "assets/img/memeriagourmet.svg",
    name: 'memeriagourmet'
  },
  {
    id: 9,
    img: "assets/img/9gag.svg",
    name: '9gag'
  },
  {
    id: 10,
    img: "assets/img/meowed.svg",
    name: 'meowed'
  },
  {
    id: 11,
    img: "assets/img/barked.svg",
    name: 'barked'
  },
  {
    id: 12,
    img: "assets/img/wawawicomics.svg",
    name: 'wawawicomics'
  },
  {
    id: 13,
    img: "assets/img/respondeai.svg",
    name: 'respondeai'
  },
  {
    id: 14,
    img: "assets/img/filomoderna.svg",
    name: 'filomoderna'
  },
  {
    id: 15,
    img: "assets/img/gato-telefone.svg",
    name: 'gato'
  },
  {
    id: 16,
    img: "assets/img/memeriagourmet.svg",
    name: 'memeriagourmet'
  },
]

export function Storie(props) {



  return (
    <>

      {arrayUser.map((user) => (
        <div className="story" key={user.id} id={user.id}>
          <div className="imagem">
            <img src={user.img} alt='imagem user' />
          </div>
          <div className="usuario">
            {user.name}
          </div>
        </div>
      ))}

      <div className="setinha" onClick={props.handleScrollStories}>
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </>
  )
}