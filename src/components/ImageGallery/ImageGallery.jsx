import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import stl from './imageGallery.module.css';
export const ImageGallery = props => {
  return (
    <div>
      <ul className={stl.ImageGallery}>
        {props.images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            toogleModal={props.toogleModal}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          ></ImageGalleryItem>
        ))}
      </ul>
    </div>
  );
};
