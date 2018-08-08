import React, {Component} from 'react';
import { ReactMic } from 'react-mic';
import FileSaver from 'file-saver';

export default class MainViewViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          record: false,
          save: false,
          transcription: ""
        };

    }

    onStop(recordedBlob) {
      /*console.log(recordedBlob.blobURL);
      const audio = new Audio(recordedBlob.blobURL);
      console.log(audio);
      audio.play();*/
    }

    startRecording = () => {
      this.setState({
        record: true
      });

      var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
      console.log(recognition);
      recognition.onstart = function() {
        alert('Voice recognition activated. Try speaking into the microphone.');
      }

      recognition.onspeechend = function() {
        alert('You were quiet for a while so voice recognition turned itself off.');
      }

      recognition.onerror = function(event) {
        if(event.error == 'no-speech') {
          alert('No speech was detected. Try again.');
        };
      }

      recognition.onresult = function(event) {
        var current = event.resultIndex;

        var transcript = event.results[current][0].transcript;
        var addedTranscription = this.state.transcription += transcript + ". "
        this.setState({
          transcription: addedTranscription
        });
      }
      recognition.onresult.bind(this);
      recognition.continuous = true;
      recognition.start();
    }

    stopRecording = () => {
      this.setState({
        record: false
      });
    }

    render() {
      const { record, save } = this.state
      return (
          <div>
            <ReactMic
              record={record}         // defaults -> false.  Set to true to begin recording
              save={save}           // set to true if you want to save
              className={"recording"} // css class name
              onStop={this.onStop}        // callback to execute when audio stops recording
              strokeColor="#000000"     // sound wave color
              backgroundColor="#ffffff"  // background color
            />
            <button onClick={this.startRecording} type="button">Start Recording</button>
            <button onClick={this.stopRecording} type="button">Save Recording</button>
          </div>
        )
    }
}
