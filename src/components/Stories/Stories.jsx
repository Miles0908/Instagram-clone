import "./index.css";

import Story from "../Story";

const Stories = ({ stories }) => {
 

  return (
    <>
      <div className="Stories">
        
        <ul className="Stories__List">
          {stories &&
            stories.map((story) => {
              return(
              <li className="Stories__item" key={story.id}>
                <Story story={story} />
              </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Stories;
