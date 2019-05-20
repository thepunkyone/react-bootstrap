import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleInputChange = (event) => console.log(event.target.value);

  render() {
    return (
      <form>
        <input onChange={this.handleInputChange} />
        <button value="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
