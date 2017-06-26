import React, { Component } from 'react';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form>
          <label htmlFor="title">Song Title:</label>
          <input
            name="title"
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default SongCreate;
