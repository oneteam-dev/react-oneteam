import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './index.css';

const LoadingIcon = props => {
  const { style = {}, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={classNames(styles.icon, className)}
      style={{ ...style, backgroundImage: `url(${require('./loading-sprites.png')})` }}
    />
  );
};

LoadingIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};

export default LoadingIcon;
