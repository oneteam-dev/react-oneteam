import React from 'react';
import Avatar from '../Avatar';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.css';

const MentionSelectCell = props => {
  const {
    className,
    user,
    name,
    username,
    email,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={classnames(styles.cell, className)}
    >
      <Avatar className={styles.avatar} user={user} size='tiny' tooltip={false} />
      <div className={styles.text}>
        <div>
          <span className={styles.name}>{name}</span>
          <span className={styles.username}>{username}</span>
        </div>
        {email ? <div><span className={styles.email}>{email}</span></div> : null}
      </div>
    </div>
  );
};

MentionSelectCell.propTypes = {
  className: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
    profile_photo: PropTypes.shape({ thumbnail_url: PropTypes.string }),
  }).isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string,
};

export default MentionSelectCell;
