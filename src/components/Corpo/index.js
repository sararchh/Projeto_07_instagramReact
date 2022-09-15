import React from 'react';
import { Post } from '../Post';
import { Sidebar } from '../SideBar';
import { Storie } from '../Storie';

export function Corpo() {

  const scrollStoriesRef = React.useRef(null);

  const handleScrollStories = () => {
    scrollStoriesRef.current.scrollLeft += 150;
  }

  return (
    <div className="corpo">
      <div className="esquerda">
        <div className="stories" ref={scrollStoriesRef}>
          <Storie handleScrollStories={handleScrollStories} />
        </div>

        <div className="posts">
          <Post />
        </div>
      </div>

      <Sidebar />
    </div>
  )
}