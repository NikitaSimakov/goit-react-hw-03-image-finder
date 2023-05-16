import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  handleImgClick = event => {
    console.dir(event);
  };

  render() {
    // const { gallery: galleryItems } = this.props.gallery;
    const { gallery, getLargeImg } = this.props;
    return gallery?.map(item => (
      <li
        className="ImageGalleryItem"
        key={item.id}
        onClick={() => {
          getLargeImg(item.largeImageURL);
        }}
      >
        <img
          src={item.webformatURL}
          alt={item.tags}
          className="ImageGalleryItem-image"
        />
      </li>
    ));
  }
}
