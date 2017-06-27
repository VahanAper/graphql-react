import React, { Component } from 'react';

class LyricCreate extends Component {
  render() {
    return (
      <form>
        <label htmlFor="lyric">Add a Lyric</label>
        <input name="lyric" />
      </form>
    );
  }
}

export default LyricCreate;
