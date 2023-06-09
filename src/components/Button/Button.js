import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Styles.module.css';

export class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button onClick={onClick} type="button" className={css.Button}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
