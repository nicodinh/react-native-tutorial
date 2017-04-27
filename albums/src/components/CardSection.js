import React    from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
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

export default CardSection;