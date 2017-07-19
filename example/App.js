import React, { Component } from 'react';
import Ribbon from 'react-github-fork-ribbon';
import { Avatar, Mention, LoadingIcon } from '../src';

export default class App extends Component {
  render() {
    return (
      <div>
        <Ribbon href='https://github.com/oneteam-dev/react-oneteam'>
          Fork me on GitHub
        </Ribbon>
        <div>
          <span>Ávatar: </span>
          <Avatar
            user={{
              name: 'sugarshin',
              profile_photo: { thumbnail_url: null },
            }}
          />
        </div>
        <div>
          <span>Mention: </span>
          <Mention>Shingo Sato</Mention>
        </div>
        <div>
          <span>LoadingIcon: </span>
          <LoadingIcon />
        </div>
      </div>
    );
  }
}
