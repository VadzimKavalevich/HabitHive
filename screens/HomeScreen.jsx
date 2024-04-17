import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Alert, FlatList, RefreshControl, Text, TouchableOpacity,} from 'react-native';
import styled from 'styled-components/native';
import {Post} from '../components/Post'
import {Loading} from "../components/Loading";


const MenuView = styled.View`
  flex-direction: column;
`;


export const HomeScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);

    const fetchPosts = () => {
        setIsLoading(true);
        axios.get('https://6613f04e2fc47b4cf27b279e.mockapi.io/api/users')
            .then(({data}) => {
                setItems(data);
            }).catch((err) => {
            console.log(err);
            Alert.alert('Error', 'Info was not received')
            alert('Info was not received');
        })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(fetchPosts, []);

    if (isLoading) {
        return (
            <Loading />
        )
    }


    return (
        <MenuView>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
                data={items}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FullPostScreen', {id: item.id, name: item.name })}>
                        <Post
                            key={item.id}
                            avatar={item.avatar}
                            name={item.name}
                            createdAt={item.createdAt}
                        />
                    </TouchableOpacity>)}
            />
        </MenuView>
    )
}


/*
export const Menu = () => {
    const [items, setItems] = useState()

    useEffect(() => {
        axios.get('https://mockapi.io/projects/6613f04e2fc47b4cf27b279f')
            .then(({data}) => {
                console.log(data);
                setItems(data);
            }).catch((err) => {
            console.log(err);
            Alert.alert('Error', 'Info was not received')
            alert('Info was not received');
        });
    }, []);
}

<MenuView>
            <Post title="Parents Zone" details="Settings" imageUrl={require('./../assets/Parents.jpg')}/>
            <Post title="Salomea" details="Your achievements, streaks!" imageUrl={require('./../assets/Sali.jpg')}/>
            <Post title="Serafim" details="Your achievements, streaks!" imageUrl={require('./../assets/Ser.jpg')}/>
        </MenuView>

*/