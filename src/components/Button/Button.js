import { Component } from 'react';

export class Button extends Component {
  state = {
    page: 1,
  };
  handleButtonClick = () => {};
  render() {
    return (
      <button onClick={this.props.onClick} type="button" className="Button">
        Load more
      </button>
    );
  }
}
