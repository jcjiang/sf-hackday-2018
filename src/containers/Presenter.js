import React, {Component} from 'react';
import Title from '../components/Title.js';
import Code from '../components/Code.js';
import Button from '../components/Button.js';

export default class Presenter extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Title description="Share this meeting code with your viewers.">
                    <Code random="QWERTY"></Code>
                    <Button 
                        name="START RECORDING" 
                        link="/"
                        type="Primary">
                    </Button>
                </Title>
            </div>
        )
    }
}