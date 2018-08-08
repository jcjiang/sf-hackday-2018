import React, {Component} from 'react';
import Header from '../components/Header.js'
import db from '../db';
import firebase from '../db/fire';
import styled from 'styled-components';

const ReactButton = styled.button`
    background: #eee;
    color: #56CCF2;
    width: 120px;
    padding: 20px;
    margin-top: 50px;
    border: 2px solid #56CCF2;
    border-radius: 5px;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
`;

const Main = styled.div`
    display: flex;
    width: 60vw;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20vh;
    margin: 0 auto;
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.5rem;
`;

export default class MainViewViewer extends Component {

    constructor(props) {
        super(props);
        this.setState = this.setState.bind(this);
        this.state = {
          status: false,
          runningTime: 0,
          startTime: 0,
          timestamps: [],
          session: ""
        };
    }

    componentDidMount() {
      this.listenForItems();
      
      const sesh = this.props.location.state.session;

      this.setState({
        session: sesh
      });
      
      db.getStartTime(sesh).then(res=> {
        this.state.startTime = res;
      });

    }

    listenForItems() {
      db.onTimeStampUpdate((items) => {
        this.setState({
          markers: items,
        });
      });
    }

    showDigitalTime = (s) => {
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

    handleClick = () => {
      //this.setState(prevState => {
          //this.setState({ timestamps: [...this.state.timestamps, this.state.runningTime]});
          //clearInterval(this.timer);

          this.state.runningTime = Date.now() - this.state.startTime;
          this.setState({ timestamps: [...this.state.timestamps, this.state.runningTime]});
          db.addTimeStamp(this.state.session, this.state.runningTime);

          // const startTime = Date.now() - this.state.runningTime;
          // this.timer = setInterval(() => {
          //   this.setState({ runningTime: Date.now() - startTime });
          // });
        
        //return { status: !prevState.status };
      //});
    };

    render() {
      const { status, runningTime, timestamps } = this.state;

      const listTimeStamps = this.state.timestamps.map((ts, idx) => 
        <p key={idx}>{this.showDigitalTime(ts)}</p>
      );

      return (
        <div>
          <Header name={`VIEWING ${this.state.session}`}></Header>
          <Main>
            <ReactButton onClick={this.handleClick}>WOW!
            </ReactButton>
            <div>{listTimeStamps}</div>
          </Main>
        </div>
      );
    }
}
