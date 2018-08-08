import React, {Component} from 'react';
import { ReactMic } from 'react-mic';
import FileSaver from 'file-saver';

export default class MainViewViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          status: false,
          runningTime: 0,
          timestamps: []
        };
    }

    handleClick = () => {
      this.setState(state => {
        if (state.status) {
          this.setState({ timestamps: [...this.state.timestamps, this.state.runningTime]});
          clearInterval(this.timer);
        } else {
          const startTime = Date.now() - this.state.runningTime;
          this.timer = setInterval(() => {
            this.setState({ runningTime: Date.now() - startTime });
          });
        }
        return { status: !state.status };
      });
    };

    render() {
      const { status, runningTime, timestamps } = this.state;
      return (
        <div>
          <p>{runningTime}ms</p>
          <p>{timestamps}</p>
          <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        </div>
      );
    }
}
