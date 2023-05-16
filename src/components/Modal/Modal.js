import { Component } from 'react';

export class Modal extends Component {
  //   const { link: linkLarge } = link;
  //   console.log(linkLarge);

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
    // const { link } = this.props.link;
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.props.link} alt="" />
        </div>
      </div>
    );
  }
}
