import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;

    if (loading) {
      return <div>Loading song...</div>;
    }

    return (
      <h3>{song.title} Details</h3>
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
