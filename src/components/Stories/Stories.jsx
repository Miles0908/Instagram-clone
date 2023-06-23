import "./index.css";

import { useEffect, useState } from "react";

import Story from "../Story";
import ModalStories from "../ModalStories/ModalStories";



const Stories = ({ user, stories }) => {
  const [storyStart, setStoryStart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalStories = (index) => {
    setStoryStart(index);
    setIsModalOpen(true);
  };
  useEffect(() => {
    setStoryStart(storyStart !== false ? storyStart : false);
  }, [storyStart]);

  const closeModalStories = () => {
    setIsModalOpen(false);
    setStoryStart(false);
  };

console.log(storyStart)

  return (
    <>
      <div className="Stories">
        <ul className="Stories__List">
          {stories &&
            stories.map((story , index) => {
              return (
                <li className="Stories__item" key={story.id} onClick={()=>openModalStories(index)}>
                  <Story story={story} />
                </li>
              );
            })}
        </ul>
      </div>
      {storyStart !== false &&(
        <ModalStories stories={stories}
        isOpen={isModalOpen}
        closeModal={closeModalStories}
        index={storyStart}/>
     
      )}
    </>
  );
};

export default Stories;
