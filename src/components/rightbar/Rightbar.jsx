import Birthday from "../../assets/birthday.jpg";
import Oil from "../../assets/oil.jpg";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src={Birthday} alt="" />
          <span className="birthdayText">
            <b>Kislay</b> and <b>29 other friends</b> have a birthday today
          </span>
        </div>
        <img src={Oil} className="rightAd" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        {Users.map((user) => (
          <Online user={user} />
        ))}
      </div>
    </div>
  );
}

export default Rightbar;
