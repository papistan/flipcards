'use strict';
 
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios';
// import Cards from './Cards';
import Card from './Card';
import NoMoreCards from './NoMoreCards';
import SwipeCards from 'react-native-swipe-cards';

 
 
const Cards2 = [
  {name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
  {name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
  {name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
  {name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
]
 
export default React.createClass({
  
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ cards: response.data }));
  },
  getInitialState() {
    return {
      cards: '',
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);
 
    let CARD_REFRESH_LIMIT = 3
 
    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
 
      if (!this.state.outOfCards) {
        console.log(`Adding ${Cards2.length} more cards`)
 
        this.setState({
          cards: this.state.cards.concat(Cards2),
          outOfCards: true
        })
      }
 
    }
 
  },
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}
 
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
 
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}
      />
    )
  }
})
 
 