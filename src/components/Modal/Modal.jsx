import { useEffect } from 'react';
import stl from './Modal.module.css';
export const Modal = props => {
  useEffect(() => {
    const handlerKeyDown = evt => {
      if (evt.code === 'Escape') {
        props.toogleModal();
      }
    };
    document.addEventListener('keydown', handlerKeyDown);

    return () => {
      document.removeEventListener('keydown', handlerKeyDown);
    };
  }, [props]);
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      props.toogleModal();
    }
  };
  return (
    <div onClick={handleBackdropClick} className={stl.Overlay}>
      <div className={stl.Modal}>
        <img src={props.largeImageURL} alt="" />
      </div>
    </div>
  );
};
