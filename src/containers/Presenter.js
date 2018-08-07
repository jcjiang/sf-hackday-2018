import React, {Component} from 'react';
import Header from '../components/Header.js'
import {Title, Code, Button, Main} from '../components';


export default class Presenter extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Main>
                <Header name="WOW WHAT A LOW PRICE"></Header>
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