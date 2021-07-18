import "./rightbar.css";
import Birthday from "../../assets/birthday.jpg";
import ProfileImg from "../../assets/profile.jpeg";
import Oil from "../../assets/oil.jpg";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src={Birthday} alt="" />
          <span className="birthdayText">
            <b>Js films</b> and <b> other friends</b> have a birthday today
          </span>
        </div>
        <img src={Oil} className="rightAd" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={ProfileImg}
                className="rightbarProfileIng"
                alt="profileimage"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kislay</span>
          </li>{" "}
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={ProfileImg}
                className="rightbarProfileIng"
                alt="profileimage"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kislay</span>
          </li>{" "}
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={ProfileImg}
                className="rightbarProfileIng"
                alt="profileimage"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kislay</span>
          </li>{" "}
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={ProfileImg}
                className="rightbarProfileIng"
                alt="profileimage"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kislay</span>
          </li>{" "}
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={ProfileImg}
                className="rightbarProfileIng"
                alt="profileimage"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kislay</span>
          </li>{" "}
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={ProfileImg}
                className="rightbarProfileIng"
                alt="profileimage"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kislay</span>
          </li>{" "}
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={ProfileImg}
                className="rightbarProfileIng"
                alt="profileimage"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kislay</span>
          </li>{" "}
          <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={ProfileImg}
                className="rightbarProfileIng"
                alt="profileimage"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kislay</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
