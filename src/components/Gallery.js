import { useEffect } from 'react';
import Image from './Image';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { pageSelector, dateSelector, imagesSelector } from '../store/galleryData/galleryDataSelectors';
import { setImages, setPage } from '../store/galleryData/galleryDataSlice';

function Gallery() {
  const dispatch = useDispatch();
  const page = useSelector(pageSelector);
  const date = useSelector(dateSelector);
  const images = useSelector(imagesSelector);

  useEffect(() => {
    dispatch(setImages([]));
    dispatch(setPage(1));
  }, [date]);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setImages([...images, ...data]));
      });        
  }, [page]);

  const nextPage = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={nextPage}
      hasMore={true}
      loader={<Loader />}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {images.map((item, key) => {
            return <Image image={item} key={item.id} index={key} />;
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default Gallery;
