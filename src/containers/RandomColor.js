import React, { Component } from 'react';
import ColorDisplay from '../components/colors/ColorDisplay';

// Changes color randomly every second

export default class RandomColor extends Component {
  state = {
    backgroundColor: 'black' //RandomColor
  };

  selectColor = () => {
    const colors = ['#75d5fd', '#b76cfd', 'black', '#ffacfc', '#f148fb', '#7122fa', '#560a86', '#08f7fe', '#09fbd3', '#fe53bb', '#f5d300', '#011ffd', '#ff2281', '#ff9472', '#3b55ce'];
    const random = Math.floor(Math.random() * colors.length);
    this.setState({ backgroundColor: colors[random] });
  }

  componentDidMount() {
    this.selectColor();
    setInterval(this.selectColor, 1000);
  }

  render() {
    const { backgroundColor } = this.state;

    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
      </>
    );
  }
}
