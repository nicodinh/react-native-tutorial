'use strict';

import React          from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => {
  /*const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );*/
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};

export default AlbumDetail;