import isIE from '@lskjs/utils/isIE';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDriveIn from 'react-drive-in2';

import {
  Background,
  BottomBlock,
  BottomTable,
  Center,
  Content,
  IFrameVideo,
  Image,
  InnerBlock,
  InnerTable,
  LeftBlock,
  LeftTable,
  Middle,
  NoClick,
  Overlay,
  RightBlock,
  RightTable,
  SlideFrame,
  TopBlock,
  TopTable,
  Video,
  VideoForeground,
} from './Slide.styles';

class Slide extends Component {
  renderVideo(video) {
    // https://www.youtube.com/asdasd/asd/asd/watch?v=c-shIOFYCRU
    // https://youtu.be/C8PYHjRj-zk
    // https://www.youtube.com/embed/C8PYHjRj-zk
    // https://youtu.be/c-shIOFYCRU?t=3m26s
    //
    if ((video && video.indexOf('youtube.com') !== -1) || (video && video.indexOf('youtu.be') !== -1)) {
      const code = video.split('watch?v=').pop().split('/').pop().split('?')[0];
      const playlist = `https://www.youtube.com/embed/${code}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${code}`;
      return (
        <Video youtube>
          <VideoForeground>
            <IFrameVideo title="iframe" frameBorder="0" allowFullScreen="1" width="640" height="360" src={playlist} />
          </VideoForeground>
        </Video>
      );
    }
    return (
      <Video>
        <ReactDriveIn poster={this.props.image || '//cdn.mgbeta.ru/lsk/_t.png'} show={video} />
      </Video>
    );
  }
  renderBg() {
    let { overlay } = this.props;
    const { video, image } = this.props;
    if (overlay === true) {
      overlay = 'rgba(0,0,0,0.5)';
    }

    return (
      <Background>
        <NoClick />
        {!!this.props.overlay && <Overlay style={{ backgroundColor: overlay }} />}
        {!!video && this.renderVideo(video)}
        {!!image && <Image style={{ backgroundImage: `url(${image})` }} />}
      </Background>
    );
  }

  renderInnerIE() {
    let { height } = this.props;
    const { width, top, left, right, bottom, content, children, full } = this.props;
    const style = {};
    if (full && !height) {
      // height = '76vh';
      height = '100vh';
    }
    if (height) {
      style.minHeight = height;
    }
    if (width) {
      style.minWidth = width;
    }
    return (
      <InnerBlock style={{ ...style, position: 'relative' }}>
        <InnerTable width="100%" style={{ ...style }}>
          <tbody>
            <tr>
              <TopTable colSpan={3} width="100%" height={10}>
                {top}
              </TopTable>
            </tr>
            <tr>
              <LeftTable>{left}</LeftTable>
              <td width="100%" style={{ height: style.minHeight }}>
                <Content>
                  {content}
                  {children}
                </Content>
              </td>
              <RightTable>{right}</RightTable>
            </tr>
            <tr>
              <BottomTable colSpan={3} width="100%" height={10}>
                {bottom}
              </BottomTable>
            </tr>
          </tbody>
        </InnerTable>
      </InnerBlock>
    );
  }

  renderInner() {
    let { height } = this.props;
    const { width, top, left, right, bottom, content, children, full } = this.props;
    const style = {};
    if (full && !height) {
      height = '100vh';
    }
    if (height) {
      style.minHeight = height;
    }
    if (width) {
      style.minWidth = width;
    }
    return (
      <InnerBlock style={style}>
        {!!top && <TopBlock>{top}</TopBlock>}
        <Middle>
          {!!left && <LeftBlock>{left}</LeftBlock>}
          {Boolean(content || children) && (
            <Center>
              <Content>
                {content}
                {children}
              </Content>
            </Center>
          )}
          {!!right && <RightBlock>{right}</RightBlock>}
        </Middle>
        {!!bottom && <BottomBlock>{bottom}</BottomBlock>}
      </InnerBlock>
    );
  }

  render() {
    const { style, color, className, fixed, center, stretch } = this.props;
    // console.log({ style });
    // style.backgroundColor = color;
    return (
      <SlideFrame
        stretch={stretch}
        fixed={fixed}
        center={center}
        ie={isIE()}
        className={className}
        style={{
          ...style,
          backgroundColor: color,
        }}
      >
        {isIE() ? this.renderInnerIE() : this.renderInner()}
        {this.renderBg()}
      </SlideFrame>
    );
  }
}

Slide.defaultProps = {
  color: 'transparent',
  overlay: false,
  video: null,
  stretch: false,
  full: false,
  image: null,
  width: null,
  height: null,
  top: null,
  left: null,
  right: null,
  bottom: null,
  content: null,
  children: null,
  className: '',
  style: {},
  fixed: false,
  center: false,
};

Slide.propTypes = {
  overlay: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  video: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  stretch: PropTypes.bool,
  full: PropTypes.bool,
  color: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  image: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  top: PropTypes.any,
  left: PropTypes.any,
  right: PropTypes.any,
  bottom: PropTypes.any,
  content: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  fixed: PropTypes.bool,
  center: PropTypes.bool,
};

export default Slide;
