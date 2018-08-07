import React, {Component}   from 'react';
import styled               from 'styled-components';

import {Button, 
        Title,
        Main }             from '../components';

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