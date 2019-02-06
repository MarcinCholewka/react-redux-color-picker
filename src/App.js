import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ColorPicker from './components/ColorPicker';

class App extends Component {
  render() {
    const { start, end } = this.props.gradient;
    return (
      <div
        className="App"
        style={{ backgroundImage: `linear-gradient(${start},${end})` }}
      >
        <header className="App-header">
          <div className="App-start-color">
            <p className="App-color-paragraph">{start}</p>
          </div>
          <div className="App-color-picker">
            <ColorPicker />
          </div>
          <div className="App-title">
            <h1>Choose a color - create your own linear gradient.</h1>
            <p>
              The first selection will appear at the top of the screen. The
              second choice will push the previous color down to create a linear
              gradient.
            </p>
          </div>
          <div className="App-end-color">
            <p className="App-color-paragraph">{end}</p>
          </div>
        </header>
      </div>
    );
  }
}

App.propTypes = {
  gradient: PropTypes.shape({
    start: PropTypes.string,
    end: PropTypes.string
  })
};

const mapStateToProps = state => ({
  gradient: state.gradients
});

export default connect(mapStateToProps)(App);
