import React, {Component} from 'react';

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
      const { status, runningTime } = this.state;
      return (
        <div>
          <p>{runningTime}ms</p>
          <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        </div>
      );
    }
}
