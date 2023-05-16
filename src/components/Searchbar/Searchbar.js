import React, { Component } from 'react';

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
            <span className="SearchForm-button-label">Search</span>
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
