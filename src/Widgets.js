import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";


const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="サイト内検索" type="text" />
      </div>

      <div className="widgets_widgetsContainer">
        <h2>What's do it</h2>
      </div>

    </div>
  );
}

export default Widgets;