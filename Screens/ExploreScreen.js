import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
    <Animatable.Text style={styles.TextStyle} animation="lightSpeedIn" iterationCount={3}>Explore Screen</Animatable.Text>
</View>
  );
}

export default ExploreScreen


const styles = StyleSheet.create({
  container: {
    flex:1,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle:{
    fontSize:18,
    fontWeight:'bold',
    color:'#ffc61a'
  }
});