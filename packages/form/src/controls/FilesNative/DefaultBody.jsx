import Button from '@lskjs/button';
import T from '@lskjs/t';
import React from 'react';
import FileIcon from 'react-icons2/mdi/file-image';
import If from 'react-if';

import { Actions, Block, Drop, DropIcon, DropText, Header, Info } from './FilesNative.styles';

const DefaultBody = ({
  dragged,
  // value,
  inputRef,
  validationState,
}) => {
  const open = () => {
    if (inputRef) {
      inputRef.click();
    }
  };
  return (
    <React.Fragment>
      <If condition={!!dragged}>
        <Drop>
          <DropText>
            <T name="upload.dropFiles" />
          </DropText>
          <DropIcon>
            <FileIcon />
          </DropIcon>
        </Drop>
      </If>
      <If condition={!dragged}>
        <Block validationState={validationState}>
          <Header>
            <Info>
              <T name="upload.infoFiles" />
            </Info>
            <Actions>
              <Button type="button" paint="primary" bordered onTouchStart={open} onClick={open}>
                <T name="upload.buttonFiles" />
              </Button>
            </Actions>
          </Header>
        </Block>
      </If>
    </React.Fragment>
  );
};

export default DefaultBody;
