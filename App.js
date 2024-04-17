import React from 'react';
import {StatusBar, View} from 'react-native';
import {HomeScreen} from "./screens/HomeScreen";
import styled from 'styled-components/native';
import {FullPostScreen} from "./screens/FullPostScreen";
import {Navigation} from "./screens/Navigation";

/*

<AppName>HABIT HIVE</AppName>
const AppName = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: rgba(0, 0, 0, 0.8);
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  margin-top: 8px;
`;
*/

export default function App() {
    return <Navigation />;
}


