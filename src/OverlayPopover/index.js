import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import PropTypes from 'prop-types';

const OverlayPopover = props => {
  return (
    <OverlayTrigger
      placement={props.placement}
      trigger={props.trigger}
      overlay={<Popover id={props.popoverId}>{props.popover}</Popover>}
    >
      {props.children}
    </OverlayTrigger>
  );
};

OverlayPopover.propTypes = {
  popoverId: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  trigger: OverlayTrigger.propTypes.trigger,
  popover: PropTypes.node.isRequired,
  children: PropTypes.node,
};

OverlayPopover.defaultProps = {
  placement: 'bottom',
  trigger: ['hover', 'focus'],
};

export default OverlayPopover;
