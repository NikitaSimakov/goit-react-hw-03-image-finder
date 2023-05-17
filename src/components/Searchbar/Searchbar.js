import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };
  handleInputChange = event => {
    const { value } = event.currentTarget;

    this.setState({ value });
  };
  handleSubmit = event => {
    const { value } = this.state;
    event.preventDefault();
    this.props.onSubmit(value);
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span>
              <AiOutlineSearch fill="black" size="20px" />
            </span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
