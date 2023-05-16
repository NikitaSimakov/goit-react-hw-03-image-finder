export const ImageGalleryItem = gallery => {
  console.log(gallery.gallery);
  const { gallery: galleryItems } = gallery;
  return galleryItems?.map(item => (
    <li className="ImageGalleryItem" key={item.id}>
      <img
        src={item.webformatURL}
        alt={item.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  ));
};
