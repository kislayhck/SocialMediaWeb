import React from "react";
import { menuList } from "./menuList";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
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
          {Users.map((friendList) => (
            <CloseFriend friendList={friendList} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
