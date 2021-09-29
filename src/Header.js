import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import FlagIcon from "@material-ui/icons/Flag";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { Avatar } from "@material-ui/core";
import me from "./images/avatar.jpg";
import HeaderOptions from "./HeaderOptions";
import { IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function Header() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="left-side">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="logo-img"
        />
        <SearchIcon></SearchIcon>
        <input type="text" placeholder="Search Facebook" />
      </div>
      <div className="mid-side">
        <div className="icon active">
          <HomeIcon></HomeIcon>

          <h4>Home</h4>
        </div>
        <div className="icon">
          <PeopleIcon></PeopleIcon>
          <h4>Friends</h4>
        </div>
        <div className="icon">
          <FlagIcon></FlagIcon>
          <h4>Pages</h4>
        </div>
        <div className="icon">
          <VideoLibraryIcon></VideoLibraryIcon>
          <h4>Watch</h4>
        </div>
        <div className="icon">
          <StorefrontIcon></StorefrontIcon>
          <h4>Marketplace</h4>
        </div>
      </div>
      <div className="right-side">
        <Avatar
          src={user?.profilePic || user.displayName[0]}
          className="avatar"
          onClick={signOut}
        ></Avatar>
        <IconButton>
          <HeaderOptions Icon={AppsIcon} title="Home"></HeaderOptions>
        </IconButton>
        <IconButton>
          <HeaderOptions Icon={ChatIcon} title="Messenger"></HeaderOptions>
        </IconButton>
        <IconButton>
          <HeaderOptions
            Icon={NotificationsIcon}
            title="Notifications"
          ></HeaderOptions>
        </IconButton>
        <IconButton>
          <HeaderOptions
            Icon={ArrowDropDownIcon}
            title="Account"
          ></HeaderOptions>
        </IconButton>
      </div>
    </div>
  );
}
