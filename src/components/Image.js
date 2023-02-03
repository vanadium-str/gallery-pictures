import { useDispatch } from 'react-redux';
import { setCurrentImage, setIsOpenModal } from '../store/modalWindow/modalWindowSlice';

function Image({ image, index }) {
  const dispatch = useDispatch();

  return (
    <div
      className="imageWrapper col-xs-12 col-md-6 col-lg-4 col-xl-3 my-2"
      onClick={() => {
        dispatch(setCurrentImage(index));
        dispatch(setIsOpenModal(true));
        document.body.style.overflow = 'hidden';
      }}
    >
      <img
        src={image.download_url}
        alt="image"
        className="img w-100 h-100 align-middle img-thumbnail"
      />
    </div>
  );
}

export default Image;
