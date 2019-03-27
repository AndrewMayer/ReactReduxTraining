import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "When Doves Cry", duration: "3:44" },
    { title: "Just Like Heaven", duration: "3:33" },
    { title: "Another One Bites the Dust", duration: "3:42" },
    { title: "It's the End of the World", duration: "4:03" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
