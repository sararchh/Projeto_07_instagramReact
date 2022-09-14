import React from 'react';
import { Post } from '../Post';
import { Sidebar } from '../SideBar';
import { Storie } from '../Storie';

export function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <div class="stories">
          <Storie />
        </div>

        <div class="posts">
          <Post />
        </div>
      </div>

      <Sidebar />
    </div>
  )
}