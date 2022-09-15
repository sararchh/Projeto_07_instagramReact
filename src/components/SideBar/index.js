import React from 'react';
import { Sugestao } from '../Sugestao';
import { User } from '../User';

export function Sidebar() {
  return (
    <div className="sidebar">
     <User/>

      <Sugestao />


      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  )
}