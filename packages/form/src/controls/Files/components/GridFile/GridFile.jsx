/** @jsx jsx */
import { jsx } from '@emotion/react';
import autobind from '@lskjs/autobind';
import Link from '@lskjs/link';
import React, { Component } from 'react';
import Remove from 'react-icons2/mdi/close-circle-outline';

import Box from '../Box';
import fileTypes from '../fileTypes';
import Typography from '../Typography';
import {
  centerFile,
  containerStyle,
  Info,
  PreviewContainer,
  PreviewImage,
  RemoveButton,
  typeStyle,
  urlStyle,
} from './GridFile.styles';

class GridFile extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.src !== nextProps.src;
  }

  @autobind
  remove() {
    const { onRemove, key, index, src } = this.props;

    if (onRemove) {
      onRemove({ key, index, src });
    }
  }

  render() {
    const { src = '', filename, image, type, onRemove, link } = this.props;
    const Icon = fileTypes[type] || fileTypes.other;
    const res = (
      <Box componentClass="div" css={containerStyle}>
        <PreviewContainer>
          {image ? <PreviewImage src={src} alt={filename} /> : <Icon size={64} css={centerFile} />}
        </PreviewContainer>
        <Info>
          <Typography color="#9b9b9b" variant="caption" css={typeStyle}>
            {type}
          </Typography>
          <Typography css={urlStyle}>{filename}</Typography>
        </Info>
        {onRemove && (
          <RemoveButton>
            <Remove onClick={this.remove} />
          </RemoveButton>
        )}
      </Box>
    );

    if (!link) return res;

    return (
      <Link href={src} target="_blank">
        {res}
      </Link>
    );
  }
}

export default GridFile;
