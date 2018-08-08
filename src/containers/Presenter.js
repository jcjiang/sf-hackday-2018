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
            recording: false,
            runningTime: 0,
            timestamps: []
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
            if (prev.recording) {
              clearInterval(this.timer);
            } else {
              const startTime = Date.now() - prev.runningTime;
              this.timer = setInterval(() => {
                this.setState({ runningTime: Date.now() - startTime });
              });
            }
            return {
                recording: !prev.recording
            }
        });
    }

    showDigitalTime = () => {
        //let date = new Date(this.state.runningTime);
        //return date.getSeconds();

        var s = this.state.runningTime;
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var sec = s % 60;
        s = (s - sec) / 60;
        var min = s % 60;

        var timeDisplay = "";

        timeDisplay = min < 10 ? timeDisplay + "0" + min : timeDisplay + min;
        timeDisplay += ":";
        timeDisplay = sec < 10 ? timeDisplay + "0" + sec : timeDisplay + sec;
        return timeDisplay;
    }

    render() {
        const { session, recording, runningTime } = this.state;

        return (
            <Main>
                <Header name="PRESENTER"></Header>
                <Title description="Share this meeting code with your viewers.">
                    <Code random={this.state.session}></Code>
                    <RecordButton
                        onClick={this.toggleRecord}>
                        {this.state.recording ? "STOP RECORDING" : "START RECORDING"}
                    </RecordButton>
                    <h1>{this.showDigitalTime()}</h1>
                </Title>
            </Main>
        )
    }
}
