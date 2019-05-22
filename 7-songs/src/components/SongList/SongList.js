import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../../actions/actions';


class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }


  render() {
    // We define what this.props is in mapStateToProps(), instead of passing it from the parent
    return <div className="ui divided list">{this.renderList()}</div>;
  }
};


// In this function we say what data we want to grab from the Redux store and assign as the props of this component.
const mapStateToProps = state => {
  // In this instance we want just the songs list
  return { songs: state.songs };
}


// We use connect in our export to hook up this component to the redux store
// Calls dispatch for us
export default connect(mapStateToProps, { selectSong })(SongList);
