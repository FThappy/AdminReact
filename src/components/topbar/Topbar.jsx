import React from "react";
import "./topbar.css"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Language, Settings } from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            BearAdmin
            <img
              src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
              alt="a"
              style={{ width: "5%" }}
            />
          </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon style={{ fontSize: "2.5rem" }} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language style={{ fontSize: "2.5rem" }} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings style={{ fontSize: "2.5rem" }} />
          </div>
          <img
            src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
