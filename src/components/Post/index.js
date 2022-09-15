import React from 'react';

const arrayPost = [
  {
    id: 1,
    img: "assets/img/meowed.svg",
    name: "meowed",
    content: "assets/img/gato-telefone.svg",
    imgLike: "assets/img/respondeai.svg",
    like: 0,
  },
  {
    id: 2,
    img: "assets/img/barked.svg",
    name: "barked",
    content: "assets/img/dog.svg",
    imgLike: "assets/img/adorable_animals.svg",
    like: 0,
  },
]

export function Post() {
  return (
    <>

    {arrayPost.map((post) => (
       <div className="post" key={post.id}>
       <div className="topo">
         <div className="usuario">
           <img src={post.img} alt='imagem post'/>
           {post.name}
         </div>
         <div className="acoes">
           <ion-icon name="ellipsis-horizontal"></ion-icon>
         </div>
       </div>

       <div className="conteudo">
         <img src={post.content} alt='imagem do conteudo'/>
       </div>

       <div className="fundo">
         <div className="acoes">
           <div>
             <ion-icon name="heart-outline"></ion-icon>
             <ion-icon name="chatbubble-outline"></ion-icon>
             <ion-icon name="paper-plane-outline"></ion-icon>
           </div>
           <div>
             <ion-icon name="bookmark-outline"></ion-icon>
           </div>
         </div>

         <div className="curtidas">
           <img src={post.imgLike} alt='imagem like'/>
           <div className="texto">
             Curtido por <strong>adorable_animals</strong> e <strong>outras {post.like} pessoas</strong>
           </div>
         </div>
       </div>
     </div>
    ))}
      
    </>
  )
}