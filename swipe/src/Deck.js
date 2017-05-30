import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder
}   from 'react-native';

class Deck extends Component {
  constructor(prop) {
    super(props);

    const panResponder = PanResponder.create({

    });

    this.state = { panResponder };
  }

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>  
    );
  }
}

export default Deck;
