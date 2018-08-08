import React, {Component} from 'react';
import Header from '../components/Header.js'
import {Title, Button, Main} from '../components';


export default class Viewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          status: false,
          runningTime: 0,
          sessionToken: "",
        };
    }

    onInputChange = (e) => {
        this.setState({
            sessionToken: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Header name="VIEWER"></Header>
                <Main>
                    <Title description="Enter your meeting code"/>
                    <input onChange={this.onInputChange}/>
                    <Button 
                        name="Enter" 
                        link="/mainviewviewer" 
                        state={{ session: this.state.sessionToken }} 
                        type="Primary"/>
                </Main>
            </div>
        )
    }
}
