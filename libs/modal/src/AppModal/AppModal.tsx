import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

import { AppModalContext, AppModalContextProps, ModalProps } from './useAppModal';

export const AppModal = ({ children }: any) => {
  const [modalState, setModalState] = useState<ModalProps | null>(null);
  function openModal(props: any) {
    setModalState(props);
  }
  function closeModal() {
    setModalState(null);
  }

  const payload: AppModalContextProps = {
    openModal,
    closeModal,
  };

  const Wrapper = modalState?.wrapper || React.Fragment;
  const wrapperProps = modalState?.wrapperProps || {};
  const size = modalState?.size || 'xl';
  const centered = modalState?.centered ?? true;
  const closable = modalState?.closable ?? true;
  return (
    <AppModalContext.Provider value={payload}>
      {children}
      <Modal size={size} centered={centered} show={!!modalState} onHide={closeModal}>
        <Wrapper {...wrapperProps}>
          {(modalState?.title || closable) && (
            <Modal.Header closeButton={closable}>
              <Modal.Title>{modalState?.title}</Modal.Title>
            </Modal.Header>
          )}
          {modalState?.body && <Modal.Body>{modalState?.body}</Modal.Body>}
          {modalState?.footer && <Modal.Footer>{modalState?.footer}</Modal.Footer>}
        </Wrapper>
      </Modal>
      <ToastContainer
        //
        position="bottom-right"
        theme="dark"
        limit={10}
      />
    </AppModalContext.Provider>
  );
};
