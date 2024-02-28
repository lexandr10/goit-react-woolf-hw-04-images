import { useState } from 'react';
import stl from './Searchbar.module.css';
export const Searchbar = props => {
  const [search, setSearch] = useState('');
  const handlerChange = evt => {
    const { value } = evt.target;
    setSearch(value);
  };
  const handlerSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert(
        'Sorry',
        'Sorry, but I dont know what to search for. Please enter your query in the search field, and Ill see what I can find.',
        'Ok'
      );
    } else {
      props.onSubmit(search);
    }
  };
  return (
    <header className={stl.searchbar}>
      <form onSubmit={handlerSubmit} className={stl.SearchForm}>
        <button type="submit" className={stl.SearchFormButton}>
          <span className={stl.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={stl.SearchFormInput}
          type="text"
          name="search"
          value={search}
          autocomplete="off"
          onChange={handlerChange}
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
