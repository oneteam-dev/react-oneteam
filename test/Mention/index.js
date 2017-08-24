import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import Mention from '../../src/Mention';

test('Mention snapshot testing', t => {
  const component = renderer.create(
    <Mention>Shingo Sato</Mention>
  );
  let tree = component.toJSON();
  t.snapshot(tree);
});
