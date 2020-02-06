import React, { Fragment } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import {robots} from './robots';

class App extends  React.Component {
    
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }    
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        
        });

        return (
            <Fragment>
                <header className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </header> 
                <CardList robots={filteredRobots}/>  
            </Fragment>

        );
    }
}

export default App;