import { useEffect } from 'react';
import stl from './Modal.module.css';
export const Modal = ({ toogleModal, largeImageURL }) => {
  useEffect(() => {
    const handlerKeyDown = evt => {
      if (evt.code === 'Escape') {
        toogleModal();
      }
    };
    document.addEventListener('keydown', handlerKeyDown);

    return () => {
      document.removeEventListener('keydown', handlerKeyDown);
    };
  }, [toogleModal]);
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toogleModal();
    }
  };
  return (
    <div onClick={handleBackdropClick} className={stl.Overlay}>
      <div className={stl.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
