import React from 'react';
import CardList from './cardList';
import {robots} from './robots';
import SearchBox from './searchBox';
import './app.css';

// Because this has states, its called a smart component
class App extends React.Component {
    constructor() {
        // Calls the constructor of React.Component, otherwise state cant be used
        super()
        // Defines changeable states of the App component. Because App owns the state, any components that has "state",
        // uses the class syntax so they can use the constructor function to create this.state
        // App is the only one that manages state and then pass down the values to the other components
        this.state = {
            robots: [], // runs constructor with an empty array, until componentDidMount() is called
            searchfield: ''
        }
    }

    // Part of react so arrow functions aren't necessary
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users})) // updates the state to populate "robots" with the array of info
    }

    // This is passed to SearchBox. Everytime a change occurs, it lets App know there is a change which App then updates
    onSearchChange = (event) => {
        // The value if "this" is the input, which is the event, not the constructor
        // Using arrow functions however, which makes sure the "this" references the constructor's value
        this.setState({searchfield: event.target.value})
    }

    render() {
        // The condition that updates the array with the filter given via the searchfield
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading..</h1>
        } else {
            // The changed state of the App is the passed through CardList to update the display to the newly filtered elements
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    {/*// Links the onSearchChange function to the prop of SearchBox const*/}
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/*// pass the robots array in current state as a prop for CardList*/}
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    }
}

export default App;