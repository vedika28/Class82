import React from 'react';
import LottieView from 'lottie-react-native';

export default class Books extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/books.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}