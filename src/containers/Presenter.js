import React, {Component} from 'react';
import Header from '../components/Header.js'
import {Title, Code, Button, Main} from '../components';
import styled from 'styled-components';

const RecordButton = styled.button`
    background: #56CCF2;
    color: #fff;
    width: 250px;
    margin-top: 10px;
    padding: 20px;
    border-radius: 5px;
    border: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
`;

export default class Presenter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            session: "",
            recording: false
        }
    }

    componentDidMount = () => {
        this.setState(() => {
            return {
                session: this.makeid()
            }
        });
    }

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 6; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    toggleRecord = () => {
        this.setState((prev) => {
            return {
                recording: !prev.recording
            }
        });
    }

    render() {
        return (
            <div>
                <Header name="PRESENTER"></Header>
                <Main>
                <Title description="Share this meeting code with your viewers.">
                    <Code random={this.state.session}></Code>
                    <RecordButton
                        onClick={this.toggleRecord}>
                        {this.state.recording ? "STOP RECORDING" : "START RECORDING"}
                    </RecordButton>
                </Title>
                </Main>
            </div>
        )
    }
}
