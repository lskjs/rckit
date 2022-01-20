/* eslint import/no-extraneous-dependencies: 0 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Help from './ModalHelp.styles';

class ModalHelp extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    align: PropTypes.oneOf(['left', 'center', 'right']),
  };
  static defaultProps = {
    align: 'left',
  };
  render() {
    const { children, align } = this.props;
    return (
      <Help align={align} className="modal-help">
        {children}
      </Help>
    );
  }
}

export default ModalHelp;
