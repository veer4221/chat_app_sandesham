import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db from "../firebase";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const[{user},dispatch] = useStateValue() 

  useEffect(() => {
   const unsubscribe =  db.collection("rooms").onSnapshot((Snapshot) =>
      setRooms(
        Snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return()=>{
      unsubscribe();
    }
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL}/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Search or Start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat={1} />
        {rooms.map(room=>(<SidebarChat key={room.id} id={room.id} name={room.data.name}/>))}
      </div>
    </div>
  );
}

export default Sidebar;
