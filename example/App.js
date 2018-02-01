import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Ribbon from 'react-github-fork-ribbon';
import { Button } from 'react-bootstrap';
import { Avatar, Mention, LoadingIcon, MessagePanel, MentionSelectCell } from '../src';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Ribbon href='https://github.com/oneteam-dev/react-oneteam'>
          Fork me on GitHub
        </Ribbon>
        <h1>react-oneteam</h1>
        <div className={styles.section}>
          <span>Ávatar: </span>
          <Avatar
            user={{
              name: 'sugarshin',
              profile_photo: { thumbnail_url: null },
            }}
          />
        </div>
        <div className={styles.section}>
          <span>Mention: </span>
          <Mention>Shingo Sato</Mention>
        </div>
        <div className={styles.section}>
          <span>LoadingIcon: </span>
          <LoadingIcon />
        </div>
        <div className={styles.section}>
          <span>MessagePanel: </span>
          <MessagePanel>
            <MessagePanel.Body>
              <p>Welcome to <strong>Oneteam</strong>!<br />Let&apos;s create first topic</p>
            </MessagePanel.Body>
            <MessagePanel.Footer>
              <Button bsStyle='primary'>Start</Button>
            </MessagePanel.Footer>
          </MessagePanel>
        </div>
        <div className={styles.section}>
          <span>MentionSelectCell: </span>
          <MentionSelectCell
            user={{
              name: 'sugarshin',
              profile_photo: { thumbnail_url: null },
            }}
            name='Shingo Sato'
            username='sugarshin'
            email='shingo.sato@oneteam.co.jp'
          />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
