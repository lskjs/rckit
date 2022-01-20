/* eslint import/no-extraneous-dependencies: 0 */
import isFunction from 'lodash/isFunction';
import React, { PureComponent } from 'react';

import { contextToProps } from '../../Modal2.context';

@contextToProps('Modal', 'modal')
class ModalInner extends PureComponent { // eslint-disable-line
  render() {
    const { Modal, modal, title, subtitle, image, content, footer, children, whiteTheme, ...props } = this.props;

    if (children) {
      if (isFunction(children)) {
        return children({ modal });
      }
      return children;
    }
    return (
      <React.Fragment>
        {title && <Modal.Title whiteTheme={!!whiteTheme}>{title}</Modal.Title>}
        {subtitle && <Modal.Subtitle>{subtitle}</Modal.Subtitle>}
        {image && <Modal.Image src={image} />}
        {content && <Modal.Content>{content}</Modal.Content>}
        {footer && <Modal.Footer>{footer}</Modal.Footer>}
      </React.Fragment>
    );
  }
}

export default ModalInner;
