import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default Spinner = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});