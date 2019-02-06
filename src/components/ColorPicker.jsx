import React from 'react';
import { connect } from 'react-redux';
import { CirclePicker } from 'react-color';
import { changeColor } from '../actions/gradients';

const ColorPicker = ({ changeColor }) => {
  return (
    <div>
      <CirclePicker onChangeComplete={color => changeColor(color.hex)} />
    </div>
  );
};

const mapDispatchToProps = {
  changeColor
};

export default connect(
  null,
  mapDispatchToProps
)(ColorPicker);
