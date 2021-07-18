import React from "react";
import "./online.css";

function Online({ user }) {
  return (
    <ul className="rightbarFriendList">
      <li className="rightBarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={user.profilePicture}
            className="rightbarProfileIng"
            alt="profileimage"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </ul>
  );
}

export default Online;
