import React, { Component } from 'react';
import { getSearchImages } from 'api/SearchImageApi';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page, isLoading } = this.props;
    if (prevProps.searchQuery !== searchQuery) {
      this.setState({ gallery: [] });
      isLoading();
      getSearchImages(searchQuery, page)
        .then(gallery => this.setState({ gallery: gallery.hits }))
        .finally(() => isLoading());
      this.handlePageUpdate();
    }
    if (prevProps.page !== page) {
      isLoading();
      getSearchImages(searchQuery, page)
        .then(gallery =>
          this.setState(prevState => {
            return { gallery: [...prevState.gallery, ...gallery.hits] };
          })
        )
        .finally(() => isLoading());
      this.handlePageUpdate();
    }
  }
  handlePageUpdate = () => this.setState({ page: this.props.page });

  render() {
    const { gallery } = this.state;
    const { getLargeImg } = this.props;
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem gallery={gallery} getLargeImg={getLargeImg} />
      </ul>
    );
  }
}
