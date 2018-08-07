import React, {Component} from 'react';
import {Title, Code, Button, Main} from '../components';


export default class Presenter extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Main>
                <Title description="Share this meeting code with your viewers.">
                    <Code random="QWERTY"></Code>
                    <Button 
                        name="START RECORDING" 
                        link="/"
                        type="Primary">
                    </Button>
                </Title>
            </Main>
        )
    }
}