import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from '../../src/Avatar';

test('Avatar snapshot testing', t => {
  const component = renderer.create(
    <Avatar
      user={{
        name: 'sugarshin',
        profile_photo: { thumbnail_url: 'https://photos-3.dropbox.com/t/2/AACVKph0cOmypQgJeMT-aD50hmePgW2GbCXSzMMPERv3Lw/12/3099689/jpeg/32x32/3/1499680800/0/2/icon.jpg/EP_erQIYw98MIAcoBw/uHn1uHMt38y8gDtksds77qi3b8ZAuRdtdi_J7X9q0cY?dl=0&size=800x600&size_mode=3' },
      }}
    />
  );
  let tree = component.toJSON();
  t.snapshot(tree);
});
