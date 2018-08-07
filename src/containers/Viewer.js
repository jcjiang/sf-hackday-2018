import React, {Component} from 'react';
import {Title, Button} from '../components';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20vh;
`;

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
                  <input />
                  <Button name="Enter" link="/mainviewviewer" type="Primary"/>
            </Main>
        )
    }
}
