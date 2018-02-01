import React, { Component } from 'react';
import { Icon } from 'react-fa';
import PropTypes from 'prop-types';
import { isHalfWidth } from 'validator';
import ColorHash from 'color-hash';
import classnames from 'classnames';
import OverlayPopover from '../OverlayPopover';
import './index.styl';

export default class Avatar extends Component {
  static propTypes = {
    user: PropTypes.shape({
      profile_photo: PropTypes.shape({
        thumbnail_url: PropTypes.string,
      }),
      name: PropTypes.string,
    }).isRequired,
    size: PropTypes.oneOf(['xs', 'mini', 'little', 'tiny', 'small', 'default']),
    onClick: PropTypes.func,
    tooltip: PropTypes.bool,
    className: PropTypes.string,
  }
  static defaultProps = {
    size: 'default',
    tooltip: true,
  }

  handleImageError = () => this.setState({ imageValid: false })

  constructor(props) {
    super(props);
    this.state = { imageValid: true };
  }

  // TODO: maybe unnecessary logic
  componentWillReceiveProps(props) {
    if (props.user.name !== this.props.user.name) {
      this.setState({ imageValid: true });
    }
  }
  render() {
    if (this._profilePhoto) {
      return this.renderWithProfilePhoto();
    } else if (this._initialName.length) {
      return this.renderWithInitialName();
    }
    return this.renderWithName();
  }
  renderWithProfilePhoto() {
    const elem = (
      <img
        title={this._name}
        alt={this._name}
        src={this.props.user.profile_photo.thumbnail_url}
        className={this._className}
        onClick={this.props.onClick}
        onError={this.handleImageError}
      />
    );
    return this.renderWithOverlayPopover(elem);
  }
  renderWithInitialName() {
    const elem = (
      <span style={this._style} className={this._className} onClick={this.props.onClick}>
        <acronym title={this._name}>{this._initialName.join(' ')}</acronym>
      </span>
    );
    return this.renderWithOverlayPopover(elem);
  }
  renderWithName() {
    const elem = (
      <span style={this._style} className={this._className} onClick={this.props.onClick}>
        <Icon name='user'/>
      </span>
    );
    return this.renderWithOverlayPopover(elem);
  }
  renderWithOverlayPopover(elem) {
    return this.props.tooltip ? (
      <OverlayPopover popover={this._name} popoverId='avatar-tooltip'>
        {elem}
      </OverlayPopover>
    ) : elem;
  }
  get _className() {
    return classnames(CLASS_NAMES[this.props.size], this.props.className, { clickable: !!this.props.onClick });
  }
  get _style() {
    const color = new ColorHash({ lightness: 0.7, saturation: 0.3 }).hex(this._name);
    return { backgroundColor: color, borderColor: 'transparent' };
  }
  get _name() {
    return this.props.user.name || '';
  }
  get _profilePhoto() {
    if (this.props.user.profile_photo && this.props.user.profile_photo.thumbnail_url && this.state.imageValid) {
      return this.props.user.profile_photo.thumbnail_url;
    }
    return null;
  }
  get _initialName() {
    const splittedName = this._name.split(/\s/g);
    const name0 = splittedName[0];
    const name1 = splittedName[splittedName.length - 1];
    const initial = [];
    if (name0) {
      initial.push(name0[0]);
    }
    if (name1 && isHalfWidth(name0) && isHalfWidth(name1) && splittedName.length > 1) {
      initial.push(name1[0]);
    }
    return initial;
  }
}

const CLASS_NAMES = {
  xs: 'avatar-xs',
  mini: 'avatar-mini',
  little: 'avatar-little',
  tiny: 'avatar-t',
  small: 'avatar-s',
  default: 'avatar',
};
