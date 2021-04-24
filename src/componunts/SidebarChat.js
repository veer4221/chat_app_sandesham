import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./SidebarChat.css"
function SidebarChat({addNewChat}) {
    const [seed,setSeed] = useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])
    const createChat=()=>{
        const roomName =prompt("please enter room name for chat")
        if(roomName){
            
        }
    };
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div classname="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last message.......</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>add new chat</h2>
        </div>
    )
}

export default SidebarChat