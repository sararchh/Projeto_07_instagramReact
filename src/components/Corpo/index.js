import React from 'react';
import { Post } from '../Post';
import { Sidebar } from '../SideBar';
import { Storie } from '../Storie';

export function Corpo() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <div className="stories">
          <Storie />
        </div>

        <div className="posts">
          <Post />
        </div>
      </div>

      <Sidebar />
    </div>
  )
}