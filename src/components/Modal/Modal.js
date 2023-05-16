import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydownClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydownClick);
  }
  handleKeydownClick = event => {
    if (event.code === 'Escape') this.props.onKeydown();
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) this.props.onKeydown();
  };
  render() {
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.props.link} alt="" />
        </div>
      </div>
    );
  }
}
