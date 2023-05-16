import React, { Component } from 'react';
import { getSearchImages } from 'api/SearchImageApi';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    page: 1,
    // isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.props;
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ gallery: [] });
      this.props.isLoading();
      getSearchImages(searchQuery, page)
        .then(gallery => this.setState({ gallery: gallery.hits }))
        .finally(() => this.props.isLoading());
      this.handlePageUpdate();
    }
    if (prevProps.page !== this.props.page) {
      this.props.isLoading();
      getSearchImages(searchQuery, page)
        .then(gallery =>
          this.setState(prevState => {
            return { gallery: [...prevState.gallery, ...gallery.hits] };
          })
        )
        .finally(() => this.props.isLoading());
      this.handlePageUpdate();
    }
  }
  handlePageUpdate = () => this.setState({ page: this.props.page });

  render() {
    const { gallery } = this.state;
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem
          gallery={gallery}
          getLargeImg={this.props.getLargeImg}
        />
      </ul>
    );
  }
}
