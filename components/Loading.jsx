import {ActivityIndicator, Text, } from "react-native";
import React from "react";
import styled from "styled-components/native";

const LoadingView = styled.View`
  flex: 1;
  top: 100%;
  align-items: center;
`;


export const Loading = () => {
    return (
        <LoadingView>
            <ActivityIndicator size="large"/>
            <Text>Loading...</Text>
        </LoadingView>
    )
}