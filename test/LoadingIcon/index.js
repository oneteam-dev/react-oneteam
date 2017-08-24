import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import LoadingIcon from '../../src/LoadingIcon';

test('LoadingIcon snapshot testing', t => {
  const component = renderer.create(
    <LoadingIcon />
  );
  let tree = component.toJSON();
  t.snapshot(tree);
});
