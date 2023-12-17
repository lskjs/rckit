import { omitNull } from '@lsk4/algos';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export type LandingSectionProps = React.PropsWithChildren<{
  full?: boolean;
  top?: boolean;
  className?: string;
  backgroundImage?: string;
}>;

type LandingSectionContainerProps = {
  children: React.ReactNode;
};

export function LandingSectionContainer({ children }: LandingSectionContainerProps) {
  return (
    <Container>
      <Row className="row justify-content-center align-items-center">
        <Col className="col-md-8 col-lg-7">{children}</Col>
      </Row>
    </Container>
  );
}

export function LandingSection({
  backgroundImage,
  full,
  top,
  className,
  children,
  ...props
}: LandingSectionProps) {
  const classNames = ['section'];
  if (top) classNames.push('section-top');
  if (full) classNames.push('section-full');
  const classNameStr = `${classNames.join(' ')} ${className}`;
  return (
    <>
      <section className={classNameStr} {...props}>
        <div
          className="bg-cover"
          style={omitNull({
            backgroundImage: backgroundImage ? `url("${backgroundImage}")` : null,
          })}
        />
        <div className="bg-overlay" />
        <div className="bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-left" />
        <div className="bg-triangle bg-triangle-light bg-triangle-bottom bg-triangle-right" />
        {/* <div className="container"> */}
        {/*  */}
        {children}
        {/* </div> */}
      </section>
    </>
  );
}

LandingSection.Container = LandingSectionContainer;
