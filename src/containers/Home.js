import React   from 'react';

import {Button, 
        Title,
        Main }             from '../components';

export default function Home(props) {
    return (
        <Main>
            <Title description="Join a Meeting!"/>
            <Button name="PRESENTER" link="/presenter" type="Primary"/>
            <Button name="VIEWER" link="/viewer" type="Secondary"/>
        </Main>
    );
}