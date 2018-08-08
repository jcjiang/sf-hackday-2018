import React, {Component} from 'react';
import Header from '../components/Header.js'
import {PresenterTitle, Code, Button, Main} from '../components';
import styled from 'styled-components';
import { ReactMic } from 'react-mic';

const RecordButton = styled.button`
    color: #fff;
    width: 250px;
    margin-top: 10px;
    padding: 20px;
    border-radius: 5px;
    border: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
`;

const MaxHeightDiv = styled.div`
  min-height: 128px;
`;
const PresenterMain = styled.div`
  display: flex;
  width: 60vw;
  height: 80vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 20vh;
  margin: 0 auto;
  text-align: center;
`;

const Stopwatch = styled.h1`
    display: inline-block;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-family: 'Roboto Mono', monospace;
`;

var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.continuous = true;

export default class Presenter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            session: "",
            recording: false,
            runningTime: 0,
            timestamps: [],
            save: false,
            transcription: "",
            final: false
        }
    }

    startRecording = () => {
      this.setState({
        record: true
      });

      recognition.start();
    }

    componentDidMount = () => {
        this.setState(() => {
            return {
                session: this.makeid()
            }
        });

        recognition.onstart = function() {
          console.log('Voice recognition activated. Try speaking into the microphone.');
        }

        recognition.onspeechend = function() {
          console.log('You were quiet for a while so voice recognition turned itself off.');
        }

        recognition.onerror = function(event) {
          if(event.error == 'no-speech') {
            console.log('No speech was detected. Try again.');
          };
        }

        recognition.onresult = (event) => {
          var current = event.resultIndex;

          var transcript = event.results[current][0].transcript;
          var updatedTranscript = this.state.transcription + transcript + ". ";
          this.setState({
            transcription: updatedTranscript
          });
        }
    }

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 6; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    toggleSpeechDetection = () => {
      if (this.state.recording) {
        recognition.start();
      } else {
        recognition.stop();
      }
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
        }, this.toggleSpeechDetection );
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
            <div>
                <Header name="PRESENTER"></Header>
                <PresenterMain>
                  <PresenterTitle description="Share this meeting code with your viewers.">
                      <Code random={this.state.session}></Code>
                      {this.state.recording ?
                        <ReactMic
                          record={this.state.recording}         // defaults -> false.  Set to true to begin recording
                          className={"recording"} // css class name
                          strokeColor="#000000"     // sound wave color
                          backgroundColor="#eee"  // background color
                        />
                        : <MaxHeightDiv /> }
                      <RecordButton
                          style={{
                              background: this.state.recording ? "#ccc" : "#56CCF2"
                          }}
                          onClick={this.toggleRecord}>
                          {this.state.recording ? "STOP RECORDING" : "START RECORDING"}
                      </RecordButton>
                      <Stopwatch>{this.showDigitalTime()}</Stopwatch>
                  </PresenterTitle>
                  <Text> {this.state.transcription} </Text>
                </PresenterMain>
            </div>
        )
    }
}
