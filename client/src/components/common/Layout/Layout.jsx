import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import classNames from 'classnames/bind';
import Navigation from '../Navbar/Navigation';
import styles from './Layout.css';
const cx = classNames.bind(styles);

class Layout extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className={cx('LayoutWrapper')}>
				<Navigation />
				<Container>
					{this.props.children}
				</Container>
			</div>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.element.isRequired
};

export default Layout;