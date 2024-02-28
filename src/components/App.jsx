import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { serviceApi } from './serviceApi/serviceApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import stl from './App.module.css';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const getImages = async () => {
      try {
        setLoading(true);
        setError('');
        const { data } = await serviceApi(page, search);
        if (data.hits.length === 0) {
          return alert(
            'Sorry, but no images were found for your request. Please try modifying your search and try again.'
          );
        }
        const total = Math.floor(data.total / 12);
        setImages(prev => [...prev, ...data.hits]);
        setTotalPages(total);
      } catch (er) {
        alert(`${er.responce.data.message}`);
      } finally {
        setLoading(false);
      }
    };
    if (!search) return;
    getImages();
  }, [search, page]);
  const onSubmit = data => {
    setSearch(data);
    setImages([]);
    setPage(1);
    setTotalPages(0);
  };

  const toogleModal = largeImg => {
    setIsHidden(prev => !prev);
    setLargeImageURL(largeImg);
  };
  const handlerLoadMore = () => {
    setPage(prev => prev + 1);
  };
  return (
    <div className={stl.App}>
      {isHidden && (
        <Modal toogleModal={toogleModal} largeImageURL={largeImageURL} />
      )}
      <Searchbar onSubmit={onSubmit} />
      {loading && <Loader />}
      {images.length > 0 && (
        <ImageGallery toogleModal={toogleModal} images={images} />
      )}

      {images.length > 0 && page <= totalPages && (
        <Button handlerLoadMore={handlerLoadMore}></Button>
      )}
    </div>
  );
};
export default App;
