import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui fluid icon input">
            <input
              type="text"
              placeholder="Image Search..."
              onChange={e => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
            <i className="search icon" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
