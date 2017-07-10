import React, { Component } from 'react'
import Ribbon from 'react-github-fork-ribbon';
import { Avatar, Mention } from '../src'

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
              profile_photo: { thumbnail_url: 'https://photos-3.dropbox.com/t/2/AACVKph0cOmypQgJeMT-aD50hmePgW2GbCXSzMMPERv3Lw/12/3099689/jpeg/32x32/3/1499680800/0/2/icon.jpg/EP_erQIYw98MIAcoBw/uHn1uHMt38y8gDtksds77qi3b8ZAuRdtdi_J7X9q0cY?dl=0&size=800x600&size_mode=3' }
            }}
          />
        </div>
        <div>
          <span>Mention: </span>
          <Mention>Shingo Sato</Mention>
        </div>
      </div>
    )
  }
}
