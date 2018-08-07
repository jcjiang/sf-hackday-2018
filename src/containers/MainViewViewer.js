import React, {Component} from 'react';

export default class MainViewViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          runtime: 0,
          running: true
        };
    }

    vote(){
      this.setState({runtime: 5});
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

    handleReset = () => {
      this.setState({ runningTime: 0, running: false });
    };

    render() {
        const { status, runningTime } = this.state;
        return (
            <div>
                <h2>MAIN VIEW</h2>
                <p>{runningTime}ms</p>
                <button onPress={() => this.setState({runtime: this.state.runtime + 5})}>Highlight</button>
                <button onClick={this.handleClick}>{status ? 'Start' : 'Stop'}</button>
                <button onClick={this.handleReset}>Reset</button>
                <h2>{this.state.runtime}</h2>
            </div>
        )
    }
}
