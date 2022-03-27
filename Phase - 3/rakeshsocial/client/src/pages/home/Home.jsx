import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
import { AuthContext } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(AuthContext);

  if (!user) {
    <Redirect to="/login" />;
  } else {
    return (
      <>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      </>
    );
  }
}
