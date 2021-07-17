import React from "react";
import { menuList, friendList } from "./menuList";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {menuList.map((item) => (
            <li className="sidebarListItem">
              <item.logo className="sidebarIcon" />
              <span className="sidebarListItemText">{item.name}</span>
            </li>
          ))}
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {friendList.map((friendList) => (
            <li className="sidebarFriend">
              <img
                className="sidebarFriendImg"
                src={friendList.friendImage}
                alt=""
              />
              <span className="sidebarFriendName">{friendList.friendName}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
