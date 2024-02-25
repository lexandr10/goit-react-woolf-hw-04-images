import { Component } from 'react';
import stl from './Modal.module.css';
export class Modal extends Component {
  handlerKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.toogleModal();
    }
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handlerKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlerKeyDown);
  }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toogleModal();
    }
  };
  render() {
    return (
      <div onClick={this.handleBackdropClick} className={stl.Overlay}>
        <div className={stl.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
