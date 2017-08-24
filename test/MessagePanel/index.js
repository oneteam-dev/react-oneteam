import test from 'ava';
import React from 'react';
import renderer from 'react-test-renderer';
import MessagePanel from '../../src/MessagePanel';

test('MessagePanel snapshot testing', t => {
  const component = renderer.create(
    <MessagePanel>
      <MessagePanel.Body>
        <p>Welcome to <strong>Oneteam</strong>!<br />Let&apos;s create first topic</p>
      </MessagePanel.Body>
      <MessagePanel.Footer>
        <span>Footer</span>
      </MessagePanel.Footer>
    </MessagePanel>
  );
  let tree = component.toJSON();
  t.snapshot(tree);
});
