/* eslint import/no-extraneous-dependencies: 0 */
import Button from '@lskjs/button';
import T from '@lskjs/t';
import React, { createRef, forwardRef } from 'react';

import DefaultModal from '../Modal2';

export default ({ Modal = DefaultModal, ...params } = {}) =>
  forwardRef(({ onSubmit, children, inner, ...props }, ref = createRef()) => (
    <Modal
      size="small"
      ref={ref}
      footer={
        <>
          <Button
            paint="primary"
            onClick={async () => {
              await onSubmit();
              ref.current.close();
            }}
          >
            <T name="common.yes" />
          </Button>
          <Modal.Trigger>
            <Button paint="danger" view="text">
              <T name="common.no" />
            </Button>
          </Modal.Trigger>
        </>
      }
      {...params}
      {...props}
      trigger={children}
      children={inner} // eslint-disable-line react/no-children-prop
    />
  ));
