import { useSelector } from 'react-redux';
import './App.css';
import Gallery from './components/Gallery';
import Header from './components/Header';
import ModalWindow from './components/ModalWindow';
import { isOpenModalSelector } from './store/modalWindow/modalWindowSelectors';

function App() {

  const isOpenModal = useSelector(isOpenModalSelector);

  return (
    <>
      <Header />
      <Gallery />
      {isOpenModal ? <ModalWindow /> : <></>}
    </>
  );
}

export default App;
