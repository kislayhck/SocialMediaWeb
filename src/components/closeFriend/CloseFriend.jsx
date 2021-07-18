import React from "react";
import "./closeFriend.css";

function CloseFriend({ friendList }) {
  return (
    <>
      <li className="sidebarFriend">
        <img
          className="sidebarFriendImg"
          src={friendList.profilePicture}
          alt=""
        />
        <span className="sidebarFriendName">{friendList.username}</span>
      </li>
    </>
  );
}

export default CloseFriend;
