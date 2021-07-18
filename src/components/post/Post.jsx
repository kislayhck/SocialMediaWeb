import React, { useState } from "react";
import "./post.css";
import Heart from "../../assets/heart.png";
import Like from "../../assets/like.png";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);

  const user = Users.filter((user) => user.id === post?.userId)[0].username;
  const profilePic = Users.filter((user) => user.id === post?.userId)[0]
    .profilePicture;

  const handleClick = () => {
    setLike(like + 1);
    setIsLiked(true);
    if (isliked) {
      setLike(like - 1);
      setIsLiked(false);
    }
  };

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
            <img
              src={Like}
              onClick={handleClick}
              className="likeIcon1"
              alt="like"
            />
            <img
              src={Heart}
              onClick={handleClick}
              className="likeIcon2"
              alt="like"
            />
            <span className="postLikeCounter">{like} peoples like this</span>
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
