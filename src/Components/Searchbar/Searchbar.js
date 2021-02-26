import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_Searchbar.scss';

class Searchbar extends Component {
  state = {
    text: '',
  };

  handleInputValue = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmitForm(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={text}
            onChange={this.handleInputValue}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;
