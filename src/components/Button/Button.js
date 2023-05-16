import { Component } from 'react';

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
