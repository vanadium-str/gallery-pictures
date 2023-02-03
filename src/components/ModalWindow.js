import { useDispatch, useSelector } from 'react-redux';
import { currentImageSelector } from '../store/modalWindow/modalWindowSelectors';
import { setCurrentImage, setIsOpenModal } from '../store/modalWindow/modalWindowSlice';
import { imagesSelector } from '../store/galleryData/galleryDataSelectors';

function ModalWindow() {
  const currentImage = useSelector(currentImageSelector);
  const images = useSelector(imagesSelector);
  const dispatch = useDispatch();

  const changeImage = (direction) => {
    let changedIndex = currentImage + direction;
    if (currentImage === 0 && direction === -1) {
      changedIndex = images.length - 1;
    } else if (currentImage === images.length - 1 && direction === 1) {
      changedIndex = 0;
    }
    dispatch(setCurrentImage(changedIndex));
  };

  return (
    <div className="modal">
      <div
        className="gallerySwitch gallerySwitchLeft"
        onClick={() => {
          changeImage(-1);
        }}
      >
        &#10094;
      </div>
      <div className="position-relative">
        <img className="slider" src={images[currentImage].download_url} alt="image" />
        <div
          className="close"
          onClick={() => {
            dispatch(setIsOpenModal(false));
            document.body.style.overflow = 'unset';
          }}
        >
          &times;
        </div>
      </div>
      <div
        className="gallerySwitch gallerySwitchRight"
        onClick={() => {
          changeImage(1);
        }}
      >
        &#10095;
      </div>
    </div>
  );
}

export default ModalWindow;
