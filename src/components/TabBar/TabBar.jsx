import "./index.css";
import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import ReelIcon from "../icons/ReelIcon";
import HearthIcon from "../icons/HearthIcon";

const TabBar = () => {
  return (
    <div className="TabBar">
      <div className="Item">
        <HomeIcon />
      </div>
      <div className="Search">
        <SearchIcon />
      </div>
      <div className="Reel">
        <ReelIcon />
      </div>
      <div className="Like">
        <HearthIcon />
      </div>
      <div className="Profile">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN1mO6fgaty3nQ2ubv2-6guOwr-qWujQgDIQ&usqp=CAU"
          alt="mr wolf"
        />
      </div>
    </div>
  );
};
export default TabBar;
