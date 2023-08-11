import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPAge";
import CreateRoomPage from "./CreateRoom";
import HomeMessagePage from "./HomeMessage";
import Room from "./Room";
import { BrowserRouter as Router, Routes, Route,useParams,Link,RedirectFunction} from "react-router-dom";


 
export default class HomePage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <Router>
            <Routes>
                <Route path = "" element = {<HomeMessagePage/>}/>
                <Route path = "/Join" element = {<RoomJoinPage/>} />
                <Route path = "/Create" element = {<CreateRoomPage/>} /> 
                <Route path = "/room/:roomCode" element = {<Room/>}/> 
            </Routes>
        </Router>
        );
    }
}