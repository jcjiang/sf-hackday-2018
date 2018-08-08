import React, {Component} from 'react';
import Header from '../components/Header.js'
import {Title, Button, Main} from '../components';


export default class Viewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          status: false,
          runningTime: 0
        };
    }

    render() {
        return (
            <div>
                <Header name="VIEWER"></Header>
                <Main>
                    <Title description="Enter your meeting code"/>
                    <input/>
                    <Button name="Enter" link="/mainviewviewer" type="Primary"/>
                </Main>
            </div>
        )
    }
}
