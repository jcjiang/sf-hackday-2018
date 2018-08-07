import React, {Component} from 'react';
import {Title, Code, Button, Main} from '../components';


export default class Presenter extends Component {
    
    constructor(props) {
        super(props);
    }
    
    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 6; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    render() {
        return (
            <Main>
                <Title description="Share this meeting code with your viewers.">
                    <Code random={this.makeid()}></Code>
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