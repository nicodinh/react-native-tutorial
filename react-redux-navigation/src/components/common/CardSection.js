import React    from 'react';
import { View } from 'react-native';

// style={[styles.containerStyle, props.style]} === array of styles: style on the right override style on the left
const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start', // flex-end or center or space-around or space-between or flex-start
    flexDirection: 'row', // row or column
    borderColor: '#ddd',
    position: 'relative',
  }
};

export { CardSection };