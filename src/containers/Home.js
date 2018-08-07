import React, {Component}   from 'react';
import styled               from 'styled-components';

import {Button, 
        Title }             from '../components';

const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20vh;
`;

export default class Home extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Main>
                <Title description="Join a Meeting!"/>
                <Button name="PRESENTER" link="/presenter" type="Primary"/>
                <Button name="VIEWER" link="/viewer" type="Secondary"/>
            </Main>
        )
    }
}