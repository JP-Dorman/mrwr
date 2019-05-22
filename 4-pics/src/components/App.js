import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      '/search/photos',
      { params: {query: term} }
    );

    console.log(response.data.results);
    this.setState({images: response.data.results});
  }

  render() {
    return(
      <div  className="ui container" style={{marginTop: '20px'}}>
        <SearchBar
          onSearchSubmit={this.onSearchSubmit}
        />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;
