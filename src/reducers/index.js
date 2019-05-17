import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:08'},
    { title: 'Macarena', duration: '2:38' },
    { title: 'All Star', duration: '2:18' },
    { title: 'I Want it That Way', duration: '1:14' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload
    default:
      return selectedSong
  }
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})