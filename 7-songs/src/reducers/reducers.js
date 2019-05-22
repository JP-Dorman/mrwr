import { combineReducers } from 'redux';


// A static list of songs to play
const songsReducer = () => {
  return [
    { title: 'Rockit', duration: '3:33' },
    { title: 'Detroit Rock City', duration: '3:35' },
    { title: 'If the River Was Whiskey', duration: '3:17' },
    { title: 'Zenzenzense', duration: '4:45' },
  ];
};


// A reducer to change the selected song
const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};


// Combine the reducers together and export them as one object
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
