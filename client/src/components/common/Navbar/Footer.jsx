import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Container } from 'reactstrap';
import styles from './Footer.css';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <Container className={cx('footer')}>
        <p>Footer</p>
    </Container>
  );
}

export default Footer;
