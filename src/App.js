/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from './components/common/Button'

import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm'
import Spinner from './components/common/Spinner'

export default class App extends Component {

  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDeaa3kfRgxtI4CdUNgH-snb1SAEbY1mfg",
      authDomain: "reactnative-authen.firebaseapp.com",
      databaseURL: "https://reactnative-authen.firebaseio.com",
      projectId: "reactnative-authen",
      storageBucket: "reactnative-authen.appspot.com",
      messagingSenderId: "618143487742"
    });

    firebase.auth().onAuthStateChanged(
      (user) => {
        console.log("state changed !!");

        if (user) {
          this.setState({ loggedIn: true })
        } else {
          console.log("ok logout!!");

          this.setState({ loggedIn: false })
        }
      });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={
            () => {
              console.log("firebase logout!!");
              firebase.auth().signOut();
            }} >
            Log out
          </Button>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <View style={{ marginTop: 100 }} >
            < Spinner />
          </View>
        );

    }
  }

  render() {
    return (
      <View >
        <Header text="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
