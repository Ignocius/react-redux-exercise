import React from 'react';
import { connect } from 'react-redux';
import { jsxClosingFragment } from '@babel/types';

const mapStateToProps = (state) => {
  console.log(state)
  return { song: state.selectedSong }
}

const SongDetail = ({song}) => {
  if(song) {
    return (
      <div>
        <h3>{song.title}</h3>
        <p>{song.duration}</p>
      </div>
    );
  }
  return <div></div>
}

export default connect(mapStateToProps)(SongDetail);