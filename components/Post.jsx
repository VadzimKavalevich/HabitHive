import React from 'react';
import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 24px;
  margin-right: 12px;
`;

const PostInfo = styled.View`
  justify-content: center;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-left: 12px;
`;

const PostDetails = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export const Post = ({title, imageUrl, details}) => {
    return (
        <PostView>
            <PostImage source={imageUrl} />
            <PostInfo>
                <PostTitle>{title}</PostTitle>
                <PostDetails>{details}</PostDetails>
            </PostInfo>
        </PostView>
    )
}