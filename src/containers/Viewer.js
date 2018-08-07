import React, {Component} from 'react';
import Header from '../components/Header.js'
import {Title, Button, Main} from '../components';
import styled from 'styled-components';


export default class Viewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          status: false,
          runningTime: 0
        };
    }

    render() {
        const { status, runningTime } = this.state;
        return (
            <div>
                <Header name="PRESENTER"></Header>
                <Main>
                    <Header name="VIEWER"></Header>
                    <Title description="Enter your meeting code"/>
                    <input/>
                    <Button name="Enter" link="/mainviewviewer" type="Primary"/>
                </Main>
            </div>
        )
    }
}
