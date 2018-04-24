import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Input from './common/Input';
import Spinner from './common/Spinner';


export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onLoginSuccess() {
    console.log("onLoginSuccess");
    this.setState({
      loading: false,
      email: '',
      password: '',
      error: ''
    });
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: 'Authentication failed !'
    });
    this.renderButton();
  }

  onButtonPress() {
    this.setState({
      error: '',
      loading: true
    });
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch((err) => {
        console.log("error failed: ", err);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'large'} />
    }

    return (
      <View style={{ flex: 1 }}>
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
      </Button>
      </View>
    );

  }

  render() {
    const errorMessage = this.state.error.length == 0 ? null : <Text style={styles.error}>
      {this.state.error}
    </Text>;

    return (
      <Card >
        <CardSection >
          <Input
            label="Email"
            value={this.state.email}
            placeholder="usere@gmail.com"
            onChangeText={(email) => this.setState({ email: email })} />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            placeholder=""
            onChangeText={(password) => this.setState({ password: password })} />
        </CardSection>
        {errorMessage}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card >
    )
  }
}

const styles = StyleSheet.create({
  error: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#ff0000'
  },
  container: {
    height: 60,
    shadowColor: '#fff',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 0 },
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#F8F8F8',
    paddingTop: 16,
    shadowColor: '#000',
  }
});