import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Redirect, useParams } from "react-router-dom";
import noAvatar from "../../components/pageAssets/noAvatar.png";
import noCover from "../../components/pageAssets/noCover.png";
import Topbar2 from "../../components/topbar/Topbar2";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [currentUser, setCurrentUser] = useState();
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setCurrentUser(res.data);
    };
    fetchUser();
  }, [username]);

  if (!user) {
    <Redirect to="/login" />;
  } else {
    return (
      <>
        <Topbar2 user={user} />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={user.coverPicture ? user.coverPicture : noCover}
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={user.profilePicture ? user.profilePicture : noAvatar}
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed username={user.username} />
              <Rightbar user={user} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
