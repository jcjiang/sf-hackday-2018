import React, {Component} from 'react';
import {Title, Button} from '../components';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20vh;
`;

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
<<<<<<< HEAD
            <div>
                <h2>Viewer</h2>
                <Button name="Presenter" link="/presenter" type="Primary"/>
               />,
            </div>
        )
    }
  }
=======
            <Main>
                <Title description="Enter your meeting code"/>
                  <input />
                  <Button name="Enter" link="/mainviewviewer" type="Primary"/>
            </Main>
        )
    }
}
>>>>>>> 93195c366b3b6f3e0d3ce6c1bdd27bdd979bb6c5
