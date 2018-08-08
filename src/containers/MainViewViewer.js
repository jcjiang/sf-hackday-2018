import React, {Component} from 'react';
import firebase from '../fire';
import Header from '../components/Header.js'

let id = 0;

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
          console.log(this.state.runningTime);
          this.itemsRef.push({
            sessionID: 'ABCDEF',
            timestamp: this.state.runningTime,
            key: id++,
          });
          console.log(this.itemsRef);
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
          <Header name="VIEWER"></Header>
          <p>{timestamps}</p>
          <button onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</button>
        </div>
      );
    }
}
