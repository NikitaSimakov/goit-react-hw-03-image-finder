import { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button onClick={onClick} type="button" className="Button">
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
