import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import CardList from './component/CardList'
import SearchBox from './component/searchBox'
import Scroll from './component/Scroll'
import {setSearchField, requestRobots} from './reduce/action'

const mapStateToProps= state=>{
  console.log(state)
  return{
    searchField : state.searchRobots.searchField ,
    robots :state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error : state.requestRobots.error
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {    
    onsearchChange:(event)=>dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=>dispatch(requestRobots())
  }
}

class App extends Component {
 
  componentDidMount() {
    
    this.props.onRequestRobots();
    
  }
 

  render() {
    
       
    const {searchField,onsearchChange,robots,isPending}=this.props;
    const filteredrobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ? (<h1>Loading....</h1>) :(
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={onsearchChange} />
        <Scroll>
          <CardList robots={filteredrobot} />
        </Scroll>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
