import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import MentionSelectCell from '../../src/MentionSelectCell';

test('MentionSelectCell snapshot testing', t => {
  const component = renderer.create(
    <MentionSelectCell
      user={{ name: 'Shingo Sato', user_name: 'sugarshin' }}
      name='Shingo Sato'
      username='sugarshin'
      email='sinsugar@gmail.com'
    />
  );
  let tree = component.toJSON();
  t.snapshot(tree);
});
