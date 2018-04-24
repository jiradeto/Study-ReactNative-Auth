import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default Input = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label} > {props.label} </Text>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        value={props.text}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center'

  },
  label: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 18

  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    color: '#000'
  }
});