import Button from '@lskjs/button';
import T from '@lskjs/t';
import React from 'react';
import FileIcon from 'react-icons2/mdi/file-image';
import If from 'react-if';

import { Actions, Block, Drop, DropIcon, DropText, Header, Info } from './Files.styles';

const FilesDefaultBody = ({
  dragged,
  // value,
  refZone,
  validationState,
}) => {
  const open = () => refZone.current && refZone.current.open();
  return (
    <>
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
              <Button type="button" paint="primary" bordered onClick={open}>
                <T name="upload.buttonFiles" />
              </Button>
            </Actions>
          </Header>
        </Block>
      </If>
    </>
  );
};

export default FilesDefaultBody;
