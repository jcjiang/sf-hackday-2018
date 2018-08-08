import React, {Component} from 'react';
import Header from '../components/Header.js'
import firebase from '../db/fire';
import styled from 'styled-components';

let id = 0;

const ReactButton = styled.button`
    background: #eee;
    color: #56CCF2;
    width: 100px;
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
        this.itemsRef = firebase.database().ref();
        this.setState = this.setState.bind(this);
        this.state = {
          status: false,
          runningTime: 0,
          timestamps: []
        };
    }

    componentDidMount() {
      this.listenForItems(this.itemsRef);
    }

    listenForItems(itemsRef) {
      itemsRef.on('value', (snap) => {

        // get children as an array
        var items = [];
        snap.forEach((child) => {
          items.push({
            timestamp: child.val(),
            _key: child.key
          });
        });

        this.setState({
          markers: items,
        });

      });
    }

    handleClick = () => {
      this.setState(state => {
        if (state.status) {
          this.setState({ timestamps: [...this.state.timestamps, this.state.runningTime]});
          //console.log(this.state.runningTime);
          this.itemsRef.push({
            sessionID: 'ABCDEF',
            timestamp: this.state.runningTime,
            key: id++,
          });
          //console.log(this.itemsRef);
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

      const listTimeStamps = this.state.timestamps.map((ts) => <p>{ts}</p>);

      return (
        <div>
          <Header name="VIEWER"></Header>
          <Main>
            <ReactButton onClick={this.handleClick}>{status ? 'Stop' : 'Start'}
            </ReactButton>
            <div>{listTimeStamps}</div>
          </Main>
        </div>
      );
    }
}
