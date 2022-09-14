import React from 'react';
import { Sugestao } from '../Sugestao';

export function Sidebar() {
  return (
    <div class="sidebar">
      <div class="usuario">
        <img src="assets/img/catanacomics.svg" />
        <div class="texto">
          <strong>catanacomics</strong>
          <div>
            Catana
            <ion-icon name="pencil-sharp"></ion-icon>
          </div>
        </div>
      </div>

      <Sugestao />


      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  )
}