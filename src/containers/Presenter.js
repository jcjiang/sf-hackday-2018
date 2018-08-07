import React, {Component} from 'react';
import Title from '../components/Title.js';

export default class Presenter extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Title description="Share this meeting code with your viewers."></Title>
            </div>
        )
    }
}