import React from "react";
import "./post.css";
import ProfileImg from "../../assets/profile.jpeg";
import Jsf from "../../assets/jsf.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import { MoreVert } from "@material-ui/icons";

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImage" src={ProfileImg} alt="" />
            <span className="postUsername">Kislay</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first post!</span>
          <img className="postImg" src={Jsf} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteIcon className="likeIcon" htmlColor="red" />
            <ThumbUpIcon className="likeIcon" htmlColor="rgb(117, 117, 194)" />
            <span className="postLikeCounter">32 peoples like this</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">9 comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
