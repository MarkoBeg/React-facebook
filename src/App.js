import React from "react";
import "./App.css";
import Header from "./Header";
import SidebarLeft from "./SidebarLeft";
import Body from "./Body";
import RightSidebar from "./RightSidebar";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";
import login from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            profilePic: user.photoURL,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {!user ? (
        <Login></Login>
      ) : (
        <>
          {/*Header*/}
          <Header></Header>
          <div className="app-body">
            <SidebarLeft></SidebarLeft>
            <Body></Body>
            <RightSidebar></RightSidebar>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
