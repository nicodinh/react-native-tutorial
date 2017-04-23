import React                  from 'react';
import { Text, Image, View }  from 'react-native';

import Card           from './Card';
import CardSection    from './CardSection';

const AlbumDetail = ({album}) => {
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyle, headerContentStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />          
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles= {
  headerContentStyle: {
    paddingLeft: 4,
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  }
}
export default AlbumDetail;