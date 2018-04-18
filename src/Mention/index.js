import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './index.css';

export const getRegex = () => /@([a-z][0-9a-z-_]*(?:\:([a-z][0-9a-z-]+))?)/g; // eslint-disable-line no-useless-escape
export const replaceMentions = (string, mentions) => {
  return string.replace(getRegex(), (match, mentionName, teamName) => {
    const mention = mentions.find(m => [m.userName, m.groupName].includes(mentionName));
    if (mention) {
      const isGroup = !!teamName;
      return ReactDOMServer.renderToStaticMarkup(<Mention isGroup={isGroup}>{mention.name}</Mention>);
    }
    return match;
  });
};
export const userMentionType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatarURL: PropTypes.string,
});
export const groupMentionType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  groupName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string,
});

const Mention = props => {
  const { children, className, isGroup, ...rest } = props;
  return <span {...rest} className={classnames(styles.mention, className, { 'is-group': isGroup })}>
    {children}
  </span>;
};

Mention.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isGroup: PropTypes.bool,
};

export default Mention;
