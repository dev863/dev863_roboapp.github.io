import React,{ Component } from 'react';
import CardList from './CardList';
import {robot} from './robot';
import SearchBox from './SearchBox';
import './App.css';
class App extends Component{
   constructor(){
    super()
    this.state={
        robot:robot,
        searchfield:''
    }
}
    onsearchChange= (event) => {
        this.setState({ searchfield:event.target.value})
        
        
    }
    render(){
        const filteredrobots=this.state.robot.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    return(
        <div>
            <center>
            <h1>RobotFriends</h1>
            <SearchBox searchChange={this.onsearchChange} />
            <CardList robot={filteredrobots}/></center>
        </div>
    );
}
    
}
export default App;
