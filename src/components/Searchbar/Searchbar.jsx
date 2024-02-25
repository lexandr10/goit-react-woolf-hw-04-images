import { Component } from 'react';
import stl from './Searchbar.module.css';
export class Searchbar extends Component {
  state = {
    search: '',
  };
  handlerChange = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.search.trim() === '') {
      alert(
        'Sorry',
        'Sorry, but I dont know what to search for. Please enter your query in the search field, and Ill see what I can find.',
        'Ok'
      );
    } else {
      this.props.onSubmit(this.state.search);
    }
  };
  render() {
    return (
      <header className={stl.searchbar}>
        <form onSubmit={this.handleSubmit} className={stl.SearchForm}>
          <button type="submit" className={stl.SearchFormButton}>
            <span className={stl.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={stl.SearchFormInput}
            type="text"
            name="search"
            value={this.props.search}
            autocomplete="off"
            onChange={this.handlerChange}
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
