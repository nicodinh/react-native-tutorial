import React, { Component } from 'react';
import { View, Text }       from 'react-native';
import axios                from 'axios';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    console.log('Will mount');
    //debugger; // <-- debugger is a break point to debugging the app, is not a comment
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({
        albums: response.data
      }));
  }

  render() {
    console.log(this.state)
    return (
      <View>
        <Text>Album List !</Text>
      </View>
    );    
  }
};

export default AlbumList;