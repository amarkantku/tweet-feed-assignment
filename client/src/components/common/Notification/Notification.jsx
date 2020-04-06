import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Notification.css';
import socket from '../../../utils/socket';
const cx = classNames.bind(styles);

class Notification extends Component {
	constructor(props){
		super(props);
		this.initComponent();
	}

	initComponent() {
		socket.on('keyword-changed', status => { this.resetCount() });
		socket.on('tweet', tweet => { this.notify() });
	}

	resetCount = () => {
		let el = document.querySelector('.notification');
		el.setAttribute('data-count', 0);
	}

	notify = () => {
		let el = document.querySelector('.notification');
		let count = Number(el.getAttribute('data-count')) || 0;
		el.setAttribute('data-count', count + 1);
    	el.classList.toggle('notify');
    	if (count === 0) {
        	el.classList.add('show-count');
   		}
	}

	render() {
		return (
			<div className={cx("notification")}></div>
		);
	}
}

export default Notification;
