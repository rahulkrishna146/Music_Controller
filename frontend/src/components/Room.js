import React, {Component} from 'react';
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 } 

class Room extends Component{
    constructor(props){
        super(props);
        this.state = {
            votesToSkip: 2,
            guestCanPause: false,
            isHost: false,
        };
        this.roomCode = this.props.match.params.roomCode;
        this.getRoomDetails = this.getRoomDetails.bind(this)
        this.getRoomDetails();
    }
    getRoomDetails(){
        fetch("/api/get-room" + "?code=" +this.roomCode)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                votesToSkip: data.votes_to_skip,
                guestCanPause: data.guest_can_pause,
                isHost: data.is_host,
            });
        });
    }
    render(){
        return (<div>
            <h3>{this.roomCode}</h3>
            <p>Votes to skip: {this.state.votesToSkip}</p>
            <p>Guest can pause: {this.state.guestCanPause.toString()}</p>
            <p>Host: {this.state.isHost.toString()}</p>
            </div>
        );
    }
}
export default withRouter(Room);


