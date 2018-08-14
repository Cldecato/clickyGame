import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
// import Container from "./components/Container";
import cards from "./cards.json";
import './App.css';


function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    cards,
    currentScore: 0,
    topScore: 0,
    clicked: [],
    response: ""
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleRight();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleWrong();
    }
  }

  handleRight = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      response: "You got it this time."
    });
    if (newScore === 12) {
        this.setState({topScore: newScore, response: "You've won, Great Job!" });
      }
    else if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    this.handleShuffle();
  }

  handleWrong = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      response: "Womp Womp",
      clicked: []
    });
    this.handleShuffle();
  }

  handleShuffle = () => {
    let shuffledCards = shuffleCards(cards);
    this.setState({ friends: shuffledCards });
  };

  render() {
    return (
      <Wrapper>
        <Navbar
         currentScore={this.state.currentScore}
         topScore={this.state.topScore}
         response={this.state.response}
        />
        <Title>Clicky Game</Title>
        <Wrapper id="screen">      
          {this.state.cards.map(card => (
            <Card
              handleClick={this.handleClick}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      </Wrapper>
    );
  }
}

export default App;
