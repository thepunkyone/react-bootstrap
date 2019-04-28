import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleInputChange = () => console.log('hello');

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
