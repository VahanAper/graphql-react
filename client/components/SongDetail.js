import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;

    if (loading) {
      return <div>Loading song...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title} Details</h3>
        <LyricList />
        <LyricCreate songId={song.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return {
      variables: {
        id: props.params.id,
      },
    };
  },
})(SongDetail);
