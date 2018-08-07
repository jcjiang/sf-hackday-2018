import React, {Component} from 'react';
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
            <Main>
                <Title description="Enter your meeting code"/>
                  <input/>
                  <Button name="Enter" link="/mainviewviewer" type="Primary"/>
            </Main>
        )
    }
}
