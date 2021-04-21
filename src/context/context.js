import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const ImageContext = createContext();

const ImageReducer = (state, action) => {
  switch (action.type) {
    case 'storeImages':
      return {
        ...state,
        images: action.payload,
        spinner: false,
      };
    case 'setAlert':
      return {
        ...state,
        alert: true,
      };
    case 'removeAlert':
      return {
        ...state,
        alert: false,
      };
    case 'setSpinner':
      return {
        ...state,
        spinner: true,
      };
    case 'setOrder':
      return {
        ...state,
        order: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

const ImageState = (props) => {
  const initialState = {
    images: [],
    alert: false,
    spinner: false,
    order: 'popular',
  };

  const [state, dispatch] = useReducer(ImageReducer, initialState);

  useEffect(() => {
    searchImage('wallpaper');
    // eslint-disable-next-line
  }, []);

  const searchImage = async (value) => {
    setSpinner();
    const res = await axios.get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${value}&image_type=all&pretty=true&per_page=200&order=${state.order}`
    );
    dispatch({ type: 'storeImages', payload: res.data.hits });
  };

  const setAlert = () => {
    dispatch({ type: 'setAlert' });
    setTimeout(() => {
      removeAlert();
    }, 5000);
  };
  const removeAlert = () => {
    dispatch({ type: 'removeAlert' });
  };

  const setSpinner = () => {
    dispatch({ type: 'setSpinner' });
  };

  const setOrder = (value) => {
    dispatch({ type: 'setOrder', payload: value });
  };

  const { alert, images, spinner, order } = state;
  return (
    <ImageContext.Provider
      value={{
        alert,
        images,
        spinner,
        order,
        setAlert,
        removeAlert,
        searchImage,
        setOrder,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
export { ImageState };
