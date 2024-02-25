import stl from './ImageGallertItem.module.css';
export const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  toogleModal,
}) => {
  return (
    <li className={stl.ImageGalleryItem} key={id}>
      <img
        className={stl.ImageGalleryItemImage}
        onClick={() => toogleModal(largeImageURL)}
        src={webformatURL}
        alt={id}
      />
    </li>
  );
};
