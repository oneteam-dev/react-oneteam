import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.css';

const MessagePanel = props => {
  return (
    <div {...props} className={classNames(styles.root, props.className)}>
      {props.children}
    </div>
  );
};

MessagePanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const Body = props => {
  return (
    <div {...props} className={classNames(styles.body, props.className)}>
      {props.children}
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const Footer = props => {
  return (
    <div {...props} className={classNames(styles.footer, props.className)}>
      {props.children}
    </div>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

MessagePanel.Footer = Footer;
MessagePanel.Body = Body;

export default MessagePanel;
