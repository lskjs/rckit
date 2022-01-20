/* eslint import/no-extraneous-dependencies: 0 */
import autobind from '@lskjs/autobind';
import filterProps from '@lskjs/utils/filterProps';
import React, { Component } from 'react';

import { contextToProps } from '../../Modal2.context';
import { triggerStyle } from '../../Modal2.styles';

@contextToProps('modal', 'Modal')
class ModalTrigger extends Component { // eslint-disable-line
  static defaultProps = {
    // id: 'single',
    // type: 'open',
    // children: '',
  };
  // static propTypes = {
  //   type: PropTypes.string,
  //   id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  //   children: PropTypes.any,
  // };

  @autobind
  handleClick(e) {
    const { modal, type, disabled } = this.props;
    if (disabled) return;
    if (e.isDefaultPrevented()) return;
    if (type === 'open') {
      modal.open();
    } else if (type === 'close') {
      modal.close();
    } else {
      modal.toggle();
    }
  }
  render() {
    const { children, componentClass: Tag = 'span', ...props } = this.props;
    return (
      <Tag className={triggerStyle} onClick={this.handleClick} {...filterProps(props, Tag)}>
        {children}
      </Tag>
    );
  }
}

export default ModalTrigger;
