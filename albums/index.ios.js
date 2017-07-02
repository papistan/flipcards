// import library for component 
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// create a component
const App = () => (
  <View>
    <Header headerText={'scouter'} />
    <AlbumList />
  </View>
  );

// render to device

AppRegistry.registerComponent('albums', () => App);