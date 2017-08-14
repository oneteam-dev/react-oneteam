import React, { Component } from 'react';
import Ribbon from 'react-github-fork-ribbon';
import { Button } from 'react-bootstrap';
import { Avatar, Mention, LoadingIcon, MessagePanel } from '../src';
import styles from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Ribbon href='https://github.com/oneteam-dev/react-oneteam'>
          Fork me on GitHub
        </Ribbon>
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
      </div>
    );
  }
}
