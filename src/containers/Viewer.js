import React, { Component } from 'react';
import { Button } from '../components';

export default class Viewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          status: false,
          runningTime: 0
        };
    }

    render() {
        const { status, runningTime } = this.state;
        return (
            <div>
                <h2>Viewer</h2>
                <Button name="Presenter" link="/presenter" type="Primary"/>
               />,
            </div>
        )
    }
  }
