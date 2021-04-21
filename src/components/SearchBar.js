import React, { useContext, useState } from 'react';
import classnames from 'classnames';
import ImageContext from '../context/context';
import Alert from './Alert';

const SearchBar = () => {
  const imageContext = useContext(ImageContext);
  const { setAlert, alert, searchImage, order, setOrder } = imageContext;

  let latest = order === 'latest' ? true : false;

  let [searchValue, setSearchValue] = useState('');

  const onSearch = (e) => {
    e.preventDefault();
    searchValue = searchValue.trim();
    if (searchValue === '') {
      setAlert();
    } else {
      searchValue = encodeURI(searchValue);
      searchImage(searchValue);
    }
  };

  const removetext = () => {
    setSearchValue('');
  };

  const latestClick = () => {
    setOrder('latest');
  };
  const popularClick = () => {
    setOrder('popular');
  };

  return (
    <div className='py-4 searchBar '>
      <div className='container'>
        <div className='developer'>Developed By NISHAD.M.M</div>
        <div className='logo my-2'>
          <span className='text-primary'>I</span>
          <span className='text-danger'>m</span>
          <span className='text-warning'>a</span>
          <span className='text-primary'>g</span>
          <span className='text-success'>e</span>
          <span className='text-danger'>H</span>
          <span className='text-primary'>u</span>
          <span className='text-warning'>b</span>
          <span className='text-danger' id='exclaim'>
            !
          </span>
        </div>
        {alert && <Alert />}
        <div className='input-group px-md-5'>
          <input
            type='text'
            className='form-control p-4'
            placeholder='search...'
            list='datalistOptions'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{
              borderRadius: '20px 0 0 20px',
              fontSize: '1.5rem',
              boxShadow: '0 2px 5px 2px #d6d6d6',
            }}
          />
          <datalist id='datalistOptions'>
            <option value='backgrounds' />
            <option value='nature' />
            <option value='science' />
            <option value='education' />
            <option value='feelings' />
            <option value='health' />
            <option value='people' />
            <option value='religion' />
            <option value='places' />
            <option value='animals' />
            <option value='industry' />
            <option value='computer' />
            <option value='food' />
            <option value='sports' />
            <option value='transportation' />
            <option value='buildings' />
            <option value='business' />
            <option value='music' />
          </datalist>
          {searchValue.length > 0 ? (
            <span
              className='input-group-text px-4'
              style={{
                backgroundColor: 'transparent',
                cursor: 'pointer',
                boxShadow: '0 2px 5px 2px #d6d6d6',
              }}
              onClick={removetext}
            >
              <i className='fas fa-times'></i>
            </span>
          ) : (
            <>
              <button
                className={classnames('btn btn-outline-danger', {
                  active: latest,
                })}
                type='button'
                onClick={latestClick}
              // onClick={setOrder('latest')}
              >
                Latest
              </button>
              <button
                className={classnames('btn btn-outline-danger', {
                  active: !latest,
                })}
                type='button'
                onClick={popularClick}
              >
                Popular
              </button>
            </>
          )}
          <span
            className='input-group-text px-4'
            style={{
              borderRadius: '0 20px 20px 0',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              boxShadow: '0 2px 5px 2px #d6d6d6',
            }}
            onClick={onSearch}
          >
            <i className='fas fa-search'></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
