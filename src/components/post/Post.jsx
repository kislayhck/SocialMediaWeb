import React from "react";
import "./post.css";
import ProfileImg from "../../assets/profile.jpeg";
import Jsf from "../../assets/jsf.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

function Post({ post }) {
  const user = Users.filter((user) => user.id === post?.userId)[0].username;
  const profilePic = Users.filter((user) => user.id === post?.userId)[0]
    .profilePicture;

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImage" src={profilePic} alt="" />
            <span className="postUsername">{user}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <FavoriteIcon className="likeIcon" htmlColor="red" />
            <ThumbUpIcon className="likeIcon" htmlColor="rgb(117, 117, 194)" />
            <span className="postLikeCounter">
              {post.like} peoples like this
            </span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">{post.comment} comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
