import React from 'react';
import styled from 'styled-components/native';
import {Post} from './Post.jsx'


const MenuView = styled.View`
  flex-direction: column;
`;

export const Menu = () => {
    return (
        <MenuView>
            <Post title="Parents Zone" details="Settings" imageUrl={require('./../assets/Parents.jpg')}/>
            <Post title="Salomea" details="Your achievements, streaks!" imageUrl={require('./../assets/Sali.jpg')}/>
            <Post title="Serafim" details="Your achievements, streaks!" imageUrl={require('./../assets/Ser.jpg')}/>
        </MenuView>
    )
}
