import React, { Component } from 'react';
import { View, Text }       from 'react-native';
import axios                from 'axios';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    console.log('Will mount');
    //debugger; // <-- debugger is a break point to debugging the app, it is not a comment
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({
        albums: response.data
      }));
  }

  renderAlbums() {
    return this.state.albums.map((album, index) => 
      <Text key={index}>{album.title}</Text>
    );
  }

  render() {
    console.log(this.state)
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );    
  }
};

export default AlbumList;