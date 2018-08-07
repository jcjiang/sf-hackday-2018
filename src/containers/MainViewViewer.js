import React, {Component} from 'react';
import {Title, Code, Button, Main} from '../components';

export default class MainViewViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          runtime: 0,
          running: false
        };
    }

    vote(){
      this.setState({runtime: 5});
    }

    render() {
        return (
            <div>
                <h2>MAIN VIEW</h2>
                <Button
                    name="START RECORDING"
                    onPress={this.vote()}
                    type="Primary">
                </Button>
            </div>
        )
    }
}
