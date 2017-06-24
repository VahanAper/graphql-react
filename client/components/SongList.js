import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map((song, index) => {
      const key = `key_${index}`;

      return (
        <li key={key}>
          {song.title}
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <ul>
        {this.renderSongs()}
      </ul>
    );
  }
}

const query = gql `
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);