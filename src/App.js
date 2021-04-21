import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import Photos from './components/Photos';
import './App.css';

import { ImageState } from './context/context';

function App() {
  return (
    <ImageState>
      <SearchBar />
      <Photos />
    </ImageState>
  );
}

export default App;
