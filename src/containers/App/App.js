import React, {Component} from 'react';
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/Searchbox/SearchBox";
import Scroll from "../../components/Scroll/Scroll";
import './App.css';

class App extends Component {

    // State is the (object) description of your App. It is able to change values.
    // The array that is displayed below, can be changed depending on the change of the searchfield.
    // States can also be used with functions, not just classes anymore with hooks
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // Fetch user data from API with App's componentDidMount() lifecycle hook
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    // Function/ Event listener for searchbox change
    // Arrow function must be used with a user defined function. Pre defined functions can use "this",
    // but user defined requires the arrow function to have "this" refer to that function, where it is used
    onSearchChange = (event) => {
        // Changes the state value of searchfield
        this.setState({searchfield: event.target.value});
    }

    render() {
        const {robots, searchfield} = this.state;

        // A filtered list of robots from the searchfield value
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ?
            <h1>Loading..</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    {/*searchChange is linked to the onSearchChange function/ event listener created above*/}
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/*User defined component used to wrap other components.
                    The wrapped components are then part of their props.children*/}
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
    }
};

export default App;
