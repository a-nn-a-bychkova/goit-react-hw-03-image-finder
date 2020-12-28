import { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchform.module.css';

export default class Searchform extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchQueryChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      // toast.error('The request is empty');

      return alert('The request is empty');
    }
    // onSubmit is prop here
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.button}>
          <span className={s.label}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.searchQuery}
          onChange={this.handleSearchQueryChange}
        />
      </form>
    );
  }
}
