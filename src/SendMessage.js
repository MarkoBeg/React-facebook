import React from "react";
import "./SendMessage.css";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import me from "./images/avatar.jpg";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

export default function SendMessage() {
  const [message, setMessage] = useState("");

  const [sendimage, setSendImage] = useState("");

  const user = useSelector(selectUser);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: message,
      profilePic: user.profilePic || user.displayName[0],
      image: sendimage,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
    setSendImage("");
  };
  return (
    <div className="sendMessage">
      <div className="sendMessage-top">
        <Avatar src={user.profilePic || user.displayName[0]}></Avatar>
        <form>
          <input
            type="text"
            placeholder={`Whats on your mind, ${user.displayName}?`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>

          <input
            type="text"
            placeholder="Import image by URL (optional)"
            value={sendimage}
            onChange={(e) => setSendImage(e.target.value)}
          />
          <button className="send-postBtn" onClick={sendMessage}>
            Send Post
          </button>
        </form>
      </div>
      <div className="sendMessage-bottom">
        <div className="widgets">
          <VideocamIcon style={{ color: "red" }}></VideocamIcon>
          <h5>Live Video</h5>
        </div>
        <div className="widgets">
          <PhotoLibraryIcon style={{ color: "#38DF28" }}></PhotoLibraryIcon>
          <h5>Photo/Video</h5>
        </div>
        <div className="widgets">
          <InsertEmoticonIcon style={{ color: "yellow" }}></InsertEmoticonIcon>
          <h5>Feeling/Activity</h5>
        </div>
      </div>
    </div>
  );
}
