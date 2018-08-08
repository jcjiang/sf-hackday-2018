import React, {Component} from 'react';
import db from '../db';

export default class MainViewViewer extends Component {

    constructor(props) {
        super(props);
        this.setState = this.setState.bind(this);
        this.state = {
          status: false,
          runningTime: 0,
          timestamps: []
        };
    }

    componentDidMount() {
      this.listenForItems();
    }

    listenForItems() {
      db.onTimeStampUpdate((items) => {
        this.setState({
          markers: items,
        });
      });
    }

    handleClick = () => {
      this.setState(prevState => {
        if (prevState.status) {
          this.setState({ timestamps: [...this.state.timestamps, this.state.runningTime]});
          console.log(this.state.runningTime);
          
          db.addTimeStamp("ABCDEF", this.state.runningTime);

          clearInterval(this.timer);
        
        } else {

          const startTime = Date.now() - this.state.runningTime;
          this.timer = setInterval(() => {
            this.setState({ runningTime: Date.now() - startTime });
          });

        }
        
        return { status: !prevState.status };
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
