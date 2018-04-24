import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}> {props.text} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});