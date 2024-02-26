import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { serviceApi, serviceApiSearch } from './serviceApi/serviceApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import stl from './App.module.css';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
export class App extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    error: '',
    search: '',
    isHidden: false,
    largeImageURL: '',
    totalPages: 0,
  };
  componentDidUpdate(_, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }
  onSubmit = data => {
    this.setState({ search: data, images: [], page: 1, totalPages: 0 });
  };

  getImages = async () => {
    try {
      this.setState({ loading: true, error: '' });
      const { data } = await serviceApi(this.state.page, this.state.search);
      if (data.hits.length === 0) {
        return alert(
          'Sorry, but no images were found for your request. Please try modifying your search and try again.'
        );
      }
      const totalPages = Math.floor(data.total / 12);
      this.setState(prev => ({
        images: [...prev.images, ...data.hits],
        totalPages: totalPages,
      }));
    } catch (error) {
      this.setState({ error: error.responce.data.message });
      alert(`${this.state.error}`);
    } finally {
      this.setState({ loading: false });
    }
  };
  toogleModal = largeImg => {
    this.setState(prev => ({
      isHidden: !prev.isHidden,
      largeImageURL: largeImg,
    }));
  };
  handlerLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  render() {
    return (
      <div className={stl.App}>
        {this.state.isHidden && (
          <Modal
            toogleModal={this.toogleModal}
            largeImageURL={this.state.largeImageURL}
          />
        )}
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.loading && <Loader />}
        {this.state.images && (
          <ImageGallery
            toogleModal={this.toogleModal}
            images={this.state.images}
          />
        )}

        {this.state.images.length > 0 &&
          this.state.page <= this.state.totalPages && (
            <Button handlerLoadMore={this.handlerLoadMore}></Button>
          )}
      </div>
    );
  }
}
