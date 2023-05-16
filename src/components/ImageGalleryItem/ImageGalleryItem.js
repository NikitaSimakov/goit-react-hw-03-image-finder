import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  handleImgClick = event => {
    console.dir(event);
  };

  render() {
    const { gallery, getLargeImg } = this.props;
    return gallery?.map(({ id, largeImageURL, webformatURL, tags }) => (
      <li
        className="ImageGalleryItem"
        key={id}
        onClick={() => {
          getLargeImg(largeImageURL);
        }}
      >
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      </li>
    ));
    // return gallery?.map(item => (
    //   <li
    //     className="ImageGalleryItem"
    //     key={item.id}
    //     onClick={() => {
    //       getLargeImg(item.largeImageURL);
    //     }}
    //   >
    //     <img
    //       src={item.webformatURL}
    //       alt={item.tags}
    //       className="ImageGalleryItem-image"
    //     />
    //   </li>
    // ));
  }
}
