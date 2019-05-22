import React from 'react';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchText: ''
    }
  }


  onSearchTextChange = (event) => {
    this.setState({ searchText: event.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchTextSubmit(this.state.searchText);
  }


  render(){
    return(
      <div className="search-bar ui segment" >
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui form">
            <div className="field">
              <label>Video Search</label>
              <input type="text" value={this.state.searchText}
                onChange={this.onSearchTextChange}
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
