import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: ""};

  onInputChange = (e) => {
    this.setState({ searchTerm: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();  // Prevent default refresh
    // Invoke the function of the parent component with the argument to process form submit
    this.props.onSearchSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="ui label">Video Search</label>
            <input onChange={this.onInputChange} value={this.state.searchTerm} className="ui input" type="text" />
            </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
