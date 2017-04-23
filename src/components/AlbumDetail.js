import React            from 'react';
import { Text, Image }  from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Image style={{width: 50, height: 50}} source={{uri: props.album.image}} />
      </CardSection>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
      <CardSection>
        <Text>{props.album.artist}</Text>
      </CardSection>      
    </Card>
  );
};

export default AlbumDetail;