import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type, value, handleChange } = this.props;
    return (
        <input name={name} type={type} value={value} onChange={handleChange}/>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  name: "text",
  type: "text",
}

export default Input;