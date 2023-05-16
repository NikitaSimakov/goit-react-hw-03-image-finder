import React, { Component } from 'react';
import { getSearchImages } from 'api/SearchImageApi';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.props;
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ gallery: [] });
      getSearchImages(searchQuery, page).then(gallery =>
        this.setState({ gallery: gallery.hits })
      );
      this.handlePageUpdate();
    }
    if (prevProps.page !== this.props.page) {
      getSearchImages(searchQuery, page).then(gallery =>
        this.setState(prevState => {
          return { gallery: [...prevState.gallery, ...gallery.hits] };
        })
      );
      this.handlePageUpdate();
    }
  }
  handlePageUpdate = () => {
    this.setState({ page: this.props.page });
  };
  render() {
    const { gallery } = this.state;
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem gallery={gallery} />
      </ul>
    );
  }
}
