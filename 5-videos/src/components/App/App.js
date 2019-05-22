import React from 'react';
import youtube from  '../apis/youtube';
import SearchBar from '../SearchBar/SearchBar';
import VideoList from '../VideoList/VideoList';
import VideoDetails from '../VideoDetails/VideoDetails';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      videos: [],
      selectedVideo: null,
    }
  }


  onSearchTextSubmit = async (searchText) => {
    const videoResponse = await youtube.get('/search', {
      params: {
        q: searchText
      }
    });

    this.setState({
      videos: videoResponse.data.items,
      selectedVideo: videoResponse.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  componentDidMount = () => {
    this.onSearchTextSubmit('buildings');
  }


  render(){
    return(
      <div className="ui container">
        <SearchBar onSearchTextSubmit={this.onSearchTextSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
