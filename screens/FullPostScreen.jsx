import React, {useEffect, useState} from "react";
import {Alert, View} from 'react-native';
import styled from 'styled-components/native';
import axios from "axios";
import {Loading} from "../components/Loading";

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = ({ route, navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const { id, name } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: name,
        });
        axios.get('https://6613f04e2fc47b4cf27b279e.mockapi.io/api/users/' + id)
            .then(({data}) => {
                setData(data);
            }).catch((err) => {
            console.log(err);
            Alert.alert('Error', 'Info was not received')
            alert('Info was not received');
        })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
        <Loading />
        )
    }


    return (
        <View style={{ padding: 20 }}>
            <PostImage
                source={{uri: data.avatar}}/>
            <PostText>
                {data.text}
            </PostText>
        </View>
    )
}