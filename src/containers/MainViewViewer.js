import React, {Component} from 'react';
import { ReactMic } from 'react-mic';
import FileSaver from 'file-saver';

export default class MainViewViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          record: false,
          save: false
        }
    }

    onSave(recordedBlob) {
      console.log("recordedBlob");
    }

    onStop(recordedBlob) {
      console.log(recordedBlob.blobURL);
      const audio = new Audio(recordedBlob.blobURL);
      console.log(audio);
      audio.play();
    }

    startRecording = () => {
      this.setState({
        record: true
      });
    }

    stopRecording = () => {
      console.log("STOP RECORDING");
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
              onSave={this.onSave}        // callback to save your recording
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
